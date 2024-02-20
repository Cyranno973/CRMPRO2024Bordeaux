import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrl: './page-add-clients.component.css'
})
export class PageAddClientsComponent implements OnInit {
  formClient!: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.formClient = this.fb.group({
      name:['',[Validators.required, Validators.maxLength(5)]],
      firstName:['', [Validators.required, Validators.minLength(2)]],
      phone:[''],
      email:['', ],
    })
  }

  save() {
    console.log(this.formClient);
    console.log(this.formClient.value);
  }
}
