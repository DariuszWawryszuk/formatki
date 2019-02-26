import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

}

export interface Customer {
  firstName?: string;
  lastName?: string;
  pesel?: string;
  sex?: string;
  cardNumber?: string;
  dateOfBirth?: string;
  identityDocType?: string;
  identityDocNumber?: string;
  email?: string;
  address: {
    street?: string;
    propertyNo?: string;
    postCode?: string;
    city?: string;
  };
  id?: string;
  active?: string;
}

