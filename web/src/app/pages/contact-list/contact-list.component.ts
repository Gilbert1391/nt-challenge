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

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((response) => {
      this.contacts = response.result;
    });
  }
}
