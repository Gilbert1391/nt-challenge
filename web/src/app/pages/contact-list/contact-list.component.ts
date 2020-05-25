import { Component, OnInit } from "@angular/core";
import {
  ContactService,
  IContact,
} from "../../services/contacts/contact.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"],
})
export class ContactListComponent implements OnInit {
  contacts: IContact[];
  searchTerm: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((response) => {
      this.contacts = response.result;
    });
  }

  deleteContact(contact: IContact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    this.contactService.deleteContact(contact._id).subscribe(null, (error) => {
      this.contacts.splice(index, 0, contact);
    });
  }
}
