import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StateClient} from "../../../core/enums/state-client";
import {NotOptionValidator} from "../../validators/not-option.validator";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrl: './page-add-clients.component.css'
})
export class PageAddClientsComponent implements OnInit {
  formClient!: FormGroup;
  allStatus: StateClient[] = Object.values(StateClient);
  selected:string = "OPTION";

  constructor(private fb: FormBuilder, private clientsService: ClientsService) {
  }
  ngOnInit() {
    this.formClient = this.fb.group({
      name:['',[Validators.required, Validators.maxLength(15)]],
      firstName:['', [Validators.required, Validators.minLength(2)]],
      phone:[''],
      email:['', ],
      status: [this.selected, [NotOptionValidator()]]
    })
  }

  save() {
    console.log(this.formClient);
    console.log(this.formClient.value);
    this.clientsService.addClient(this.formClient.value);
  }
}
