import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/app.component';
import { DataBaseService } from 'src/app/data-base.service';

@Component({
  selector: 'app-find-update',
  templateUrl: './find-update.component.html',
  styleUrls: ['./find-update.component.css']
})
export class FindUpdateComponent implements OnInit {


  findCustomerForm1: FormGroup;


  customer: Customer;

  customersList: Array<Customer> = [];

  constructor(private dbService: DataBaseService) { }

  ngOnInit() {
    this.findCustomerForm1 = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      pesel: new FormControl(null),
    });
  }

  find() {

    const firstName = this.findCustomerForm1.value.firstName;
    const lastName = this.findCustomerForm1.value.lastName;
    const pesel = this.findCustomerForm1.value.pesel;


    this.dbService.getCustomers(firstName, lastName, pesel).subscribe( customers => {
      this.customersList = customers;
    });

  }
}
