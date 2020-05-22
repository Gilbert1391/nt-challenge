import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/newtech', {
      useNewUrlParser: true,
    }),
    ContactsModule,
  ],
})
export class AppModule {}
