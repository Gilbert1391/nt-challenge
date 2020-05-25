import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { ContactService } from "../../services/contacts/contact.service";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.scss"],
})
export class EditContactComponent implements OnInit {
  contactId: string;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  onPopulateForm(eventForm: FormGroup) {
    this.route.params.subscribe((param) => (this.contactId = param.id));

    this.contactService.getContactById(this.contactId).subscribe((response) => {
      const { firstName, lastName, phone } = response;
      eventForm.patchValue({ firstName, lastName, phoneNumber: phone });
    });
  }

  onSubmit(eventForm: FormGroup) {
    const { firstName, lastName, phoneNumber } = eventForm.value;

    this.contactService
      .updateContact(this.contactId, {
        firstName,
        lastName,
        phone: phoneNumber,
      })
      .subscribe(() => this.router.navigateByUrl(""));
  }
}
