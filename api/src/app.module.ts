import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsModule } from './contacts/contacts.module';
import * as config from 'config';

const dbConfig = config.get('db');

@Module({
  imports: [
    MongooseModule.forRoot(dbConfig, {
      useNewUrlParser: true,
    }),
    ContactsModule,
  ],
})
export class AppModule {}
