import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../app.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css']
})
export class FindCustomerComponent implements OnInit {

  findCustomerForm: FormGroup;

  customer: Customer;

  customers: Array<Customer>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.findCustomerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      pesel: new FormControl(null),
    });
  }

  find() {

    const firstName = this.findCustomerForm.value.firstName;
    const lastName = this.findCustomerForm.value.lastName;
    const pesel = this.findCustomerForm.value.pesel;

    this.httpService.deleteCustomer(firstName, lastName, pesel).subscribe(customer => {
      console.log(customer);
    });

  }
}