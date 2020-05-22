import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
});

export interface IContact extends mongoose.Document {
  firstName: string;
  lastName: string;
  phone: number;
}
