import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {ErrorsModule} from "./errors/errors.module";
import {OrdersModule} from "./orders/orders.module";
import {ClientsModule} from "./clients/clients.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,

    AppRoutingModule,

    CoreModule,
    ErrorsModule,
    ClientsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
