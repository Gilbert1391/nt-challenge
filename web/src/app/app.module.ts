import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContactService } from "./services/contacts/contact.service";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";
import { NewContactComponent } from "./pages/new-contact/new-contact.component";
import { EditContactComponent } from "./pages/edit-contact/edit-contact.component";
import { ContactFormComponent } from "./shared/components/contact-form/contact-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent,
    EditContactComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
