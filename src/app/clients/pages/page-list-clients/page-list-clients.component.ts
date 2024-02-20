import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Observable} from "rxjs";
import {Client} from "../../../core/models/clients";

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.css'
})
export class PageListClientsComponent implements OnInit {
  tabPrenoms: string[]= [];
  headers: string[] =  ['companyName', 'firstName', 'lastName', 'email', 'phone', 'address', 'zipCode', 'city', 'country', 'state'];
  clientsList: Client[] = [];
  constructor(private clientsService: ClientsService) {
  }
  ngOnInit() {
    // console.log('page html initialisé');
    this.clientsService.getAllCLients().subscribe({
      next: (clients: Client[]) => {
        console.log(clients);
        this.clientsList = clients
      }
    })
  }


}
