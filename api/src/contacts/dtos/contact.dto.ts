import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  firstName: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  lastName: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  phone: string;
}
