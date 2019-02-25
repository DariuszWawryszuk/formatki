import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customerForm: FormGroup;

  documents = ['Dowód osobisty', 'Paszport', 'Prawo jazdy'];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      pesel: new FormControl(null),
      sex: new FormControl(null),
      cardNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
      document: new FormControl(this.documents[0]),
      identityDocNumber: new FormControl(null),
      email: new FormControl(null),
      address: new FormGroup({
        street: new FormControl(null),
        propertyNo: new FormControl(null),
        postCode: new FormControl(null),
        city: new FormControl(null),
      }),
    });
  }

  onSubmit() {

    const customer: Customer = this.customerForm.value;

    this.httpService.addPost(customer).subscribe( c => {
      console.log(c);
    });
  }
}

export interface Customer {
  firstName: string;
  lastName?: string;
  pesel?: string;
  sex?: boolean;
  cardNumber?: string;
  dateOfBirth?: string;
  document?: string;
  identityDocNumber?: string;
  email?: string;
  street?: string;
  propertyNo?: string;
  postCode?: string;
  city?: string;
}

