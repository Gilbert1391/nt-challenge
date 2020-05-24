import { Component, OnInit } from "@angular/core";
import { ContactService, IContact } from "./services/contacts/contact.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  contacts: IContact[];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((response) => {
      console.log(response);
      this.contacts = response.result;
    });
  }
}
