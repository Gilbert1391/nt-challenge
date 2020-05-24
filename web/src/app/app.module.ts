import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContactService } from "./services/contacts/contact.service";
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";

@NgModule({
  declarations: [AppComponent, ContactFormComponent, ContactListComponent],
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
