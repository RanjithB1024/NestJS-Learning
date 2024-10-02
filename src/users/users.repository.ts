/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './users.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}

  async create(createUserDto): Promise<Users> {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  async delete(id: string) {
    return this.usersModel.deleteOne({ _id: id });
  }
}
