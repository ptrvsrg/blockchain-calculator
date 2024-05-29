/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { Dictionary } from '../types/Dictionary.ts'
import { ErrorResponse } from '../types/ErrorResponse.ts'

export class HttpClient {
  private static instance: HttpClient

  private readonly timeout: number

  constructor(timeout: number = 30_000) {
    this.timeout = timeout
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      const timeout = 30_000
      HttpClient.instance = new HttpClient(timeout)
    }

    return HttpClient.instance
  }

  public async patch<T = any>(
    url: string,
    data: Dictionary<any> | string,
    parameters?: AxiosRequestConfig,
    timeout_?: number
  ): Promise<AxiosResponse<T>> {
    const config = {
      timeout: timeout_ ?? this.timeout,
      ...parameters,
    }
    try {
      return await axios.patch(url, data, config)
    } catch (error) {
      throw this.getErrorMessage(error)
    }
  }

  public async post<T = any>(
    url: string,
    data: Dictionary<any> | string,
    parameters?: AxiosRequestConfig,
    timeout_?: number
  ): Promise<AxiosResponse<T>> {
    const config = {
      timeout: timeout_ ?? this.timeout,
      ...parameters,
    }
    try {
      return await axios.post(url, data, config)
    } catch (error) {
      throw this.getErrorMessage(error)
    }
  }

  public async put<T = any>(
    url: string,
    data: Dictionary<any>,
    parameters?: AxiosRequestConfig,
    timeout_?: number
  ): Promise<AxiosResponse<T>> {
    const config = {
      timeout: timeout_ ?? this.timeout,
      ...parameters,
    }

    try {
      return await axios.put(url, data, config)
    } catch (error) {
      throw this.getErrorMessage(error)
    }
  }

  public async delete<T = any>(
    url: string,
    parameters?: AxiosRequestConfig,
    timeout_?: number
  ): Promise<AxiosResponse<T>> {
    const config = {
      timeout: timeout_ ?? this.timeout,
      ...parameters,
    }
    try {
      return await axios.delete(url, config)
    } catch (error) {
      throw this.getErrorMessage(error)
    }
  }

  public async get<T = any>(url: string, parameters?: any, timeout_?: number): Promise<AxiosResponse<T>> {
    const config = {
      params: parameters,
      timeout: timeout_ ?? this.timeout,
    }
    try {
      return await axios.get(url, config)
    } catch (error) {
      throw this.getErrorMessage(error)
    }
  }

  private getErrorMessage(error: any): ErrorResponse | undefined {
    if (!(error instanceof AxiosError)) {
      return undefined
    }

    const axiosError = error as AxiosError
    return axiosError.response?.data as ErrorResponse
  }
}
