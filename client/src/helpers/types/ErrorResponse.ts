export class ErrorResponse {
  public status: number

  public message: string

  public debug: string

  constructor(status: number, message: string, debug: string) {
    this.status = status
    this.message = message
    this.debug = debug
  }
}
