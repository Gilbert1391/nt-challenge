import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ContactService } from "../../services/contacts/contact.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.scss"],
})
export class NewContactComponent implements OnInit {
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    const { firstName, lastName, phoneNumber } = form.value;
    this.contactService
      .createContact({ firstName, lastName, phone: phoneNumber })
      .subscribe(() => this.router.navigateByUrl(""));
  }
}
