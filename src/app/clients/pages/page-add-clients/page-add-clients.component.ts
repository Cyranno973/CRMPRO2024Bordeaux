import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StateClient} from "../../../core/enums/state-client";
import {NotOptionValidator} from "../../validators/not-option.validator";

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrl: './page-add-clients.component.css'
})
export class PageAddClientsComponent implements OnInit {
  formClient!: FormGroup;
  allStatus: StateClient[] = Object.values(StateClient);

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    console.log(this.allStatus);
    this.formClient = this.fb.group({
      name:['',[Validators.required, Validators.maxLength(5)]],
      firstName:['', [Validators.required, Validators.minLength(2)]],
      phone:[''],
      email:['', ],
      status: ['', [NotOptionValidator()]]
    })
  }

  save() {
    console.log(this.formClient);
  }
}
