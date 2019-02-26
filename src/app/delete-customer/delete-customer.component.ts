import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { Customer } from '../app.component';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  deleteCustomerForm: FormGroup;

  customer: Customer;

  customers: Array<Customer>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.deleteCustomerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      pesel: new FormControl(null),
    });
  }

  find() {

    const firstName = this.deleteCustomerForm.value.firstName;
    const lastName = this.deleteCustomerForm.value.lastName;
    const pesel = this.deleteCustomerForm.value.pesel;

    this.httpService.deleteCustomer(firstName, lastName, pesel).subscribe(customer => {
      console.log(customer);
    });

  }

}
