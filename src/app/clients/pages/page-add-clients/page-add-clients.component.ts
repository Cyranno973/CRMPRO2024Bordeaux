import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StateClient} from "../../../core/enums/state-client";
import {NotOptionValidator} from "../../validators/not-option.validator";
import {ClientsService} from "../../services/clients.service";
import {ClientsStoreService} from "../../services/clients-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrl: './page-add-clients.component.css'
})
export class PageAddClientsComponent implements OnInit {
  formClient!: FormGroup;
  allStatus: StateClient[] = Object.values(StateClient);
  selected: string = "OPTION";
  longeurClients!: number;

  constructor(private fb: FormBuilder, private clientsService: ClientsService, private clientsStoreService: ClientsStoreService,
              private router: Router) {
  }

  ngOnInit() {
    this.formClient = this.fb.group({
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      phone: [''],
      email: ['',],
      state: [this.selected, [NotOptionValidator()]]
    })
  }

  save() {
    // console.log(this.formClient);
    // console.log(this.formClient.value);
    this.clientsService.getAllCLients().subscribe(clients => {
      this.longeurClients = clients.length;

      const newClient = {...this.formClient.value, id: this.longeurClients + 1}
      console.log(newClient);


      this.clientsService.addClient(newClient).subscribe(v => {
        console.log(v);
        this.clientsStoreService.addClient(newClient);
        this.router.navigate(['/clients']);
      });
    })
  }
}
