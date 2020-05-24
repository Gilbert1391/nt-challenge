import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";

const routes: Routes = [
  {
    path: "",
    component: ContactListComponent,
  },
  {
    path: "contact/:id",
    component: ContactFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
