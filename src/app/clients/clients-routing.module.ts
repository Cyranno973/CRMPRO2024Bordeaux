import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageListClientsComponent} from "./pages/page-list-clients/page-list-clients.component";
import {PageAddClientsComponent} from "./pages/page-add-clients/page-add-clients.component";
import {PageEditClientsComponent} from "./pages/page-edit-clients/page-edit-clients.component";

const routes: Routes = [
  {path:'', component: PageListClientsComponent},
  {path:'add', component: PageAddClientsComponent},
  {path:'edit/:id', component: PageEditClientsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
