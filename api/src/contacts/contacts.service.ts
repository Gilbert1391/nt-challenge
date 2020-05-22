import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IContact } from './schemas/contact.chema';
import { ContactDto } from './dtos/contact.dto';

@Injectable()
export class ContactsService {
  constructor(@InjectModel('Contact') private contactModel: Model<IContact>) {}

  async getContacts(): Promise<IContact[]> {
    return this.contactModel.find().exec();
  }

  async createContact(contactDto: ContactDto): Promise<IContact> {
    const contact = new this.contactModel(contactDto);
    return contact.save();
  }
}
