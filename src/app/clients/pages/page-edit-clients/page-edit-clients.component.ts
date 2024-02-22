import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientsService} from "../../services/clients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotOptionValidator} from "../../validators/not-option.validator";
import {StateClient} from "../../../core/enums/state-client";
import {Client} from "../../../core/models/clients";
import {ClientsStoreService} from "../../services/clients-store.service";

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrl: './page-edit-clients.component.css'
})
export class PageEditClientsComponent implements OnInit {
  id!: number;
  formClient!: FormGroup;
  selected:string = "OPTION";
  allStatus: StateClient[] = Object.values(StateClient);
  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientsService, private fb: FormBuilder,
              private clientsStoreService: ClientsStoreService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap);
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.clientService.getClientById(this.id).subscribe(client => {
      console.log(client);
      // if(client.state) this.selected = client.state;
      this.formClient = this.fb.group({
        lastName:[client.lastName || '' ,[Validators.required, Validators.maxLength(15)]],
        firstName:[client.firstName || '', [Validators.required, Validators.minLength(2)]],
        phone:[client.phone || ''],
        email:[client.email || '', ],
        state: [client.state || '', [NotOptionValidator()]]
      })
    })

  }
  save(){
    const newClient: Client = {... this.formClient.value, id: this.id};
    this.clientService.updateClient(newClient).subscribe(v => {
      console.log(v)
      this.clientsStoreService.updateClient(newClient);
      this.router.navigate(['/clients']);
    })
  }
}
