import { IsNotEmpty, MinLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  @MinLength(3)
  firstName: string;

  @IsNotEmpty()
  @MinLength(3)
  lastName: string;

  @IsNotEmpty()
  @MinLength(10) // valid for DR
  phone: string;
}
