import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageListClientsComponent} from "./pages/page-list-clients/page-list-clients.component";
import {PageAddClientsComponent} from "./pages/page-add-clients/page-add-clients.component";
import {PageEditClientsComponent} from "./pages/page-edit-clients/page-edit-clients.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent,
  ]
})
export class ClientsModule { }
