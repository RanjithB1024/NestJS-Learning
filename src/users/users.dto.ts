/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  DeptId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  DeptName: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  EmpId: number;
}
