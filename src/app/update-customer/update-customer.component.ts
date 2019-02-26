import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../app.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm: FormGroup;


  documents = ['Dowód osobisty', 'Paszport', 'Prawo jazdy'];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.updateCustomerForm = new FormGroup({
      id: new FormControl(null),
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
  update() {
    const customer: Customer = this.updateCustomerForm.value;
    customer.active = 'true';

    this.httpService.updateCustomerPut(customer).subscribe(c => {
      console.log(c);
    });
  }

  find() {
    const id = this.updateCustomerForm.value.id;

    this.httpService.findByIdGet(id).subscribe(customer => {
      console.log(customer);
      this.updateCustomerForm.patchValue({
        firstName: customer.firstName,
        lastName: customer.lastName,
        pesel: customer.pesel,
        sex: customer.sex,
        cardNumber: customer.cardNumber,
        dateOfBirth: customer.dateOfBirth,
        identityDocType: customer.identityDocType,
        identityDocNumber: customer.identityDocNumber,
        email: customer.email,
        address: {
        street: customer.address.street,
        propertyNo: customer.address.propertyNo,
        postCode: customer.address.postCode,
        city: customer.address.city,
      }
      });
    });

  }
}

