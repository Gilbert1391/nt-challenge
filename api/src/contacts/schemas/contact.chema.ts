import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 50 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 50 },
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
});

export interface IContact extends mongoose.Document {
  firstName: string;
  lastName: string;
  phone: string;
}
