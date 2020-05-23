import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IContact } from './schemas/contact.chema';
import { ContactDto } from './dtos/contact.dto';
import { UpdateContactDto } from './dtos/updateContact.dto';

@Injectable()
export class ContactsService {
  constructor(@InjectModel('Contact') private contactModel: Model<IContact>) {}

  async getContacts(): Promise<IContact[]> {
    return await this.contactModel.find().exec();
  }

  async getContactById(id: string): Promise<IContact> {
    const contact = await this.contactModel.findById(id).exec();

    if (!contact) {
      throw new NotFoundException(`Contact with ID "${id}" not found`);
    }
    return contact;
  }

  async createContact(contactDto: ContactDto): Promise<IContact> {
    const contact = new this.contactModel(contactDto);
    return await contact.save();
  }

  async updateContact(
    id: string,
    updateContactDto: UpdateContactDto,
  ): Promise<void> {
    const contact = await this.getContactById(id);
    await this.contactModel
      .findByIdAndUpdate(contact.id, updateContactDto)
      .exec();
  }

  async deleteContact(id: string): Promise<void> {
    const contact = await this.getContactById(id);
    await this.contactModel.deleteOne(contact);
  }
}
