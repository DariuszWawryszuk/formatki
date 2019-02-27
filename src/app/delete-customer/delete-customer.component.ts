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

    console.log(this.customer);
    this.deleteCustomerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl('Tralala'),
      pesel: new FormControl(null),
    });
  }

}
