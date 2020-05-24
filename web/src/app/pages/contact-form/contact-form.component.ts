import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ContactService } from "../../services/contacts/contact.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  contactId: string;

  contactForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
  });

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => (this.contactId = param.id));

    this.contactService.getContactById(this.contactId).subscribe((response) => {
      const { firstName, lastName, phone } = response;
      this.contactForm.patchValue({ firstName, lastName, phoneNumber: phone });
    });
  }

  onSubmit(): void {
    const { firstName, lastName, phoneNumber } = this.contactForm.value;
    this.contactService
      .updateContact(this.contactId, {
        firstName,
        lastName,
        phone: phoneNumber,
      })
      .subscribe(() => this.router.navigateByUrl(""));
  }

  get firstName() {
    return this.contactForm.get("firstName");
  }

  get lastName() {
    return this.contactForm.get("lastName");
  }

  get phoneNumber() {
    return this.contactForm.get("phoneNumber");
  }
}
