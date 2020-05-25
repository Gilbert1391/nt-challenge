import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";
import { NewContactComponent } from "./pages/new-contact/new-contact.component";
import { EditContactComponent } from "./pages/edit-contact/edit-contact.component";

const routes: Routes = [
  {
    path: "",
    component: ContactListComponent,
  },
  {
    path: "new-contact",
    component: NewContactComponent,
  },
  {
    path: "contact/:id",
    component: EditContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
