/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString({
    each: true,
  })
  ingredients: string[];

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  abv: number;
}
