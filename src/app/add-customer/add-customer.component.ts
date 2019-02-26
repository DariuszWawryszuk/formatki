import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { Customer } from '../app.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm: FormGroup;

  documents = ['Dowód osobisty', 'Paszport', 'Prawo jazdy'];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.addCustomerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      pesel: new FormControl(null),
      sex: new FormControl(null),
      cardNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
      identityDocType: new FormControl(this.documents[0]),
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

    const customer: Customer = this.addCustomerForm.value;

    this.httpService.addPost(customer).subscribe( c => {
      console.log(c);
    });
  }

}
