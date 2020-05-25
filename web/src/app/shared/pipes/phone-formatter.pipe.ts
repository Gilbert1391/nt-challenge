import { Pipe, PipeTransform } from "@angular/core";
import { parsePhoneNumber, CountryCode } from "libphonenumber-js/min";

@Pipe({
  name: "phoneFormatter",
})
export class PhoneFormatterPipe implements PipeTransform {
  transform(phoneValue: string | number, country?: string): any {
    if (!phoneValue) {
      return phoneValue;
    }

    const phoneNumber = parsePhoneNumber(
      phoneValue + "",
      country as CountryCode
    );
    return phoneNumber.formatNational();
  }
}
