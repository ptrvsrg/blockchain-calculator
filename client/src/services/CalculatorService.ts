import { HttpClient } from '../helpers/clients/HttpClient.ts'
import { ErrorResponse } from '../helpers/types/ErrorResponse.ts'
import { projectConfig } from '../stores/ProjectStore.ts'
import { addAlert } from '../utils/alert.ts'
import { AddParams, DivideParams, MultiplyParams, SubtractParams } from './CalculatorService.types.ts'

export class CalculatorService {
  private static instance: CalculatorService

  private httpClient: HttpClient

  private readonly baseUrl: string

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
    this.baseUrl = projectConfig.backendUrl
  }

  public static getInstance(): CalculatorService {
    if (!CalculatorService.instance) {
      CalculatorService.instance = new CalculatorService(HttpClient.getInstance())
    }

    return CalculatorService.instance
  }

  public async add(parameters: AddParams): Promise<number> {
    try {
      const result = await this.httpClient.post<{ result: number }>(`${this.baseUrl}/api/v1/calculator/add`, parameters)
      return result.data.result
    } catch (error) {
      console.log(error)
      addAlert((error as ErrorResponse).message, 'error')
      throw error
    }
  }

  public async subtract(parameters: SubtractParams): Promise<number> {
    try {
      const result = await this.httpClient.post<{ result: number }>(
        `${this.baseUrl}/api/v1/calculator/subtract`,
        parameters
      )
      return result.data.result
    } catch (error) {
      addAlert((error as ErrorResponse).message, 'error')
      throw error
    }
  }

  public async multiply(parameters: MultiplyParams): Promise<number> {
    try {
      const result = await this.httpClient.post<{ result: number }>(
        `${this.baseUrl}/api/v1/calculator/multiply`,
        parameters
      )
      return result.data.result
    } catch (error) {
      addAlert((error as ErrorResponse).message, 'error')
      throw error
    }
  }

  public async divide(parameters: DivideParams): Promise<number> {
    try {
      const result = await this.httpClient.post<{ result: number }>(
        `${this.baseUrl}/api/v1/calculator/divide`,
        parameters
      )
      return result.data.result
    } catch (error) {
      addAlert((error as ErrorResponse).message, 'error')
      return 0
    }
  }
}
