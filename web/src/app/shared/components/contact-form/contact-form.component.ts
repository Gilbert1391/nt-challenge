import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  @Output() handleSubmit = new EventEmitter();
  @Output() handlePopulateForm = new EventEmitter();

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

  constructor() {}

  ngOnInit() {
    this.handlePopulateForm.emit(this.contactForm);
  }

  onSubmit() {
    this.handleSubmit.emit(this.contactForm);
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
