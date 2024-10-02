/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, errorCode: string, statusCode: HttpStatus) {
    super({ message, errorCode, statusCode }, statusCode);
  }
}
