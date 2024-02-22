import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Observable, Subject, BehaviorSubject, Subscription} from "rxjs";
import {Client} from "../../../core/models/clients";
import {ClientsStoreService} from "../../services/clients-store.service";

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.css'
})
export class PageListClientsComponent implements OnInit, OnDestroy {
  tabPrenoms: string[] = [];
  headers: string[] = ['companyName', 'firstName', 'lastName', 'email', 'phone', 'address', 'zipCode', 'city', 'country', 'state', 'actions'];
  clientsList: Client[] = [];
  private clientSubscription!: Subscription;

  constructor(private clientsService: ClientsService, private clientsStoreService: ClientsStoreService) {
  }

  ngOnInit() {

    this.clientSubscription = this.clientsService.getAllCLients().subscribe({
      next: (clients: Client[]) => {
        this.clientsStoreService.clients = clients;
      }
    })
    this.clientsStoreService.clients$.subscribe(clients =>  this.clientsList = clients);
  }
  ngOnDestroy() {
    console.log('je detruit le composant listclient')
    if (this.clientSubscription) {
      this.clientSubscription.unsubscribe();
    }
  }
  delete(id: number) {
    this.clientsService.deleteClient(id).subscribe(v => {
      this.clientsStoreService.deleteCLientById(id);
    })
  }




}
