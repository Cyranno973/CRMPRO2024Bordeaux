import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Client} from "../../core/models/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsStoreService {
 private readonly _clients:BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);
 readonly clients$: Observable<Client[]> = this._clients.asObservable();

 get clients(): Client[] {
   return this._clients.getValue();
 }

 set clients(val: Client[]) {
   this._clients.next(val);
 }

 setClients(val: Client[]){
   this._clients.next(val)
 }

 addClient(newClient: Client){
   this.clients = [...this.clients, newClient];
 }
 deleteCLientById(id: number){
   this.clients = this.clients.filter(client => client.id !== id )
 }
 updateClient(updatedClient: Client) {
   const currentClients = [...this.clients];
   const index = currentClients.findIndex(client => client.id === updatedClient.id);
   currentClients[index] = updatedClient;
   this.clients = currentClients;
 }

  constructor() { }
}
