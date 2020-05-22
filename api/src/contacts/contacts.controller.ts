import { ContactDto } from './dtos/contact.dto';
import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { IContact } from './schemas/contact.chema';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  getContacts(): Promise<IContact[]> {
    return this.contactsService.getContacts();
  }

  @Post()
  createContact(@Body() contactDto: ContactDto): Promise<IContact> {
    return this.contactsService.createContact(contactDto);
  }

  @Patch()
  updateContact(): string {
    return 'update a contact';
  }

  @Delete()
  deleteContact(): string {
    return 'delete a contact';
  }
}
