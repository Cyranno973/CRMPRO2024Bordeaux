import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListClientsComponent} from "./clients/pages/page-list-clients/page-list-clients.component";
import {PageAddClientsComponent} from "./clients/pages/page-add-clients/page-add-clients.component";
import {PageEditClientsComponent} from "./clients/pages/page-edit-clients/page-edit-clients.component";
import {ErrorComponent} from "./errors/error/error.component";


const routes: Routes = [
  {path:'', redirectTo:'/clients', pathMatch:"full" },
  {path:'clients', component: PageListClientsComponent},
  {path:'add', component: PageAddClientsComponent},
  {path:'edit/:id', component: PageEditClientsComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
