import { Pipe, PipeTransform } from "@angular/core";
import { IContact } from "../../services/contacts/contact.service";

@Pipe({ name: "contactFilter" })
export class ContactFilterPipe implements PipeTransform {
  transform(contacts: IContact[], searchTerm: string): IContact[] {
    if (!contacts || !searchTerm) {
      return contacts;
    }

    return contacts.filter(
      (c) =>
        c.firstName.toLowerCase().includes(searchTerm) ||
        c.lastName.toLowerCase().includes(searchTerm)
    );
  }
}
