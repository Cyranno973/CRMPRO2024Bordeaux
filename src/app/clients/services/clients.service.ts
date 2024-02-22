import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Client} from "../../core/models/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
 apiUrl:string = 'http://localhost:3000/clients';
  constructor(private http: HttpClient) { }
  getAllCLients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}`,client);
  }
  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.apiUrl}/${id}`);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }
  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`,client);
  }

  getAllprenoms(): Observable<string[]>{
    return of(['veronica', 'gabriel', 'sixtine']);
  }
}
