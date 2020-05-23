import { ContactDto } from './dtos/contact.dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { IContact } from './schemas/contact.chema';
import { UpdateContactDto } from './dtos/updateContact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  getContacts(): Promise<IContact[]> {
    return this.contactsService.getContacts();
  }

  @Get('/:id')
  getContactById(@Param('id') id: string): Promise<IContact> {
    return this.contactsService.getContactById(id);
  }

  @Post()
  createContact(@Body() contactDto: ContactDto): Promise<IContact> {
    return this.contactsService.createContact(contactDto);
  }

  @Patch('/:id')
  @HttpCode(204)
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<void> {
    return this.contactsService.updateContact(id, updateContactDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteContact(@Param('id') id: string): Promise<void> {
    return this.contactsService.deleteContact(id);
  }
}
