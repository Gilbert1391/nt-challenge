import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { ContactService } from "./services/contacts/contact.service";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";
import { NewContactComponent } from "./pages/new-contact/new-contact.component";
import { EditContactComponent } from "./pages/edit-contact/edit-contact.component";
import { ContactFormComponent } from "./shared/components/contact-form/contact-form.component";
import { ContactFilterPipe } from "./pages/contact-list/contact-filter.pipe";
import { PhoneFormatterPipe } from "./shared/pipes/phone-formatter.pipe";
import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";

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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ContactService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
