/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly beersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.beersRepository.create(createUserDto);
  }

  async findAll() {
    return this.beersRepository.findAll();
  }

  async delete(id: string) {
    return this.beersRepository.delete(id);
  }
}
