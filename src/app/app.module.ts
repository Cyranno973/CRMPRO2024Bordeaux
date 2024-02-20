import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import {PageListClientsComponent} from "./clients/pages/page-list-clients/page-list-clients.component";
import {PageAddClientsComponent} from "./clients/pages/page-add-clients/page-add-clients.component";
import {PageEditClientsComponent} from "./clients/pages/page-edit-clients/page-edit-clients.component";
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './errors/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
