import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Observable, Subject} from "rxjs";
import {Client} from "../../../core/models/clients";

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.css'
})
export class PageListClientsComponent implements OnInit {
  tabPrenoms: string[]= [];
  headers: string[] =  ['companyName', 'firstName', 'lastName', 'email', 'phone', 'address', 'zipCode', 'city', 'country', 'state', 'actions'];
  clientsList: Client[] = [];

  number: Subject<number> = new Subject<number>();
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

  //   const monObservable = new Observable(subcriber => {
  //     subcriber.next('Bonjour Dame');
  //     subcriber.next('Bonjour Virginie');
  //     subcriber.next('Bonjour Sukjin');
  //     subcriber.complete();
  //     subcriber.next('Bonjour Lucia');
  //     //   subcriber.error();
  //     // subcriber.complete();
  //   })
  //   const monObservable1 = new Observable();
  //
  //   monObservable.subscribe({
  //     next: value => {
  //       console.log("A ",value);
  //     }
  //   })
  //
  //   monObservable1.subscribe({
  //     next: value => {
  //       console.log("B ", value);
  //     }
  //   })
  }

  delete(id: number) {
    this.clientsService.deleteClient(id).subscribe(v => {
      this.clientsService.getAllCLients().subscribe(clients => this.clientsList = clients)

    })
  }

  test(){

  }
}
