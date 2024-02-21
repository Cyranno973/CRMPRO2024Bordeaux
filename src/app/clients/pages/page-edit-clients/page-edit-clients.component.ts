import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../services/clients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotOptionValidator} from "../../validators/not-option.validator";
import {StateClient} from "../../../core/enums/state-client";

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
  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.clientService.getClientById(this.id).subscribe(client => {
      console.log(client);
      this.formClient = this.fb.group({
        lastName:[client.lastName || '' ,[Validators.required, Validators.maxLength(15)]],
        firstName:[client.firstName || '', [Validators.required, Validators.minLength(2)]],
        phone:[client.phone || ''],
        email:[client.email || '', ],
        status: [client.state || '', [NotOptionValidator()]]
      })
    })

  }
  save(){

  }
}
