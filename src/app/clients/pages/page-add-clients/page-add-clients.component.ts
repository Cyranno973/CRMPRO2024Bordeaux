import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
      name:['aeaea'],
      firstName:[''],
      phone:[''],
      email:[''],
    })
  }
}
