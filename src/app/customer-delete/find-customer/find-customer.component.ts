import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/app.component';
import { DataBaseService } from 'src/app/data-base.service';

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css']
})
export class FindCustomerComponent implements OnInit {

  findCustomerForm: FormGroup;


  customer: Customer;

  customersList: Array<Customer>;

  constructor(private dbService: DataBaseService) { }

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


    this.customersList = this.dbService.getCustomers(firstName, lastName, pesel);

  }



}
