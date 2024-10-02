/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { CustomException } from 'src/customException';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllwithCustomException() {
    try {
      const users = await this.usersService.findAll();

      if (!users || users.length === 0) {
        throw new CustomException('No users found', 'USER_NOT_FOUND', 404);
      }

      return users;
    } catch (error) {
      throw new CustomException(
        'An error occurred while retrieving users',
        'INTERNAL_ERROR',
        500,
      );
    }
    
  }

  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();

      // Check if no users are found
      if (!users || users.length === 0) {
        throw new NotFoundException({
          statusCode: 404,
          message: 'No users found',
          errorCode: 'USER_NOT_FOUND',
        });
      }

      return users;
    } catch (error) {
            throw new InternalServerErrorException({
        statusCode: 500,
        message: 'An error occurred while retrieving users',
        errorCode: 'INTERNAL_ERROR',
        details: error.message,  
      });
    }
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
