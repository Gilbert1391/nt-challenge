import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContactService } from "./services/contacts/contact.service";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";
import { NewContactComponent } from "./pages/new-contact/new-contact.component";
import { EditContactComponent } from "./pages/edit-contact/edit-contact.component";
import { ContactFormComponent } from "./shared/components/contact-form/contact-form.component";
import { ContactFilterPipe } from "./pages/contact-list/contact-filter.pipe";
import { PhoneFormatterPipe } from "./shared/pipes/phone-formatter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent,
    EditContactComponent,
    ContactFormComponent,
    ContactFilterPipe,
    PhoneFormatterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
