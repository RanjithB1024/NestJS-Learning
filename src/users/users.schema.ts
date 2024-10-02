/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({
  timestamps: true,
})
export class Users {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: [String], required: true })
  ingredients: string[];

  @Prop({ type: Number, required: true })
  abv: number;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
