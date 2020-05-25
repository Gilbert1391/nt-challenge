import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  lastName: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  phone: string;
}
