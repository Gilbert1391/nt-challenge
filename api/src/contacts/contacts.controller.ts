import { ContactDto } from './dtos/contact.dto';
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpCode,
  Put,
} from '@nestjs/common';
import { ContactsService, IApiResponse } from './contacts.service';
import { IContact } from './schemas/contact.chema';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async getContacts(): Promise<IApiResponse> {
    const result = await this.contactsService.getContacts();
    const total = result.length;

    return { result, total };
  }

  @Get('/:id')
  getContactById(@Param('id') id: string): Promise<IContact> {
    return this.contactsService.getContactById(id);
  }

  @Post()
  createContact(@Body() contactDto: ContactDto): Promise<IContact> {
    return this.contactsService.createContact(contactDto);
  }

  @Put('/:id')
  @HttpCode(204)
  updateContact(
    @Param('id') id: string,
    @Body() contactDto: ContactDto,
  ): Promise<void> {
    return this.contactsService.updateContact(id, contactDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteContact(@Param('id') id: string): Promise<void> {
    return this.contactsService.deleteContact(id);
  }
}
