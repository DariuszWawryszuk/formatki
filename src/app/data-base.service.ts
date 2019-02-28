import { Injectable } from '@angular/core';
import { Customer } from './app.component';
import { HttpService } from './http.service';


@Injectable()
export class DataBaseService {


  customer: Customer;

  customersList: Array<Customer>;

  constructor(private httpService: HttpService) { }

  getCustomerById(id: string): Customer {
    this.httpService.findByIdGet(id).subscribe( c => {
      this.customer = c;
    });

    return this.customer;
  }

  getCustomers(firstName, lastName, pesel): Array<Customer> {
     this.httpService.findCustomers(firstName, lastName, pesel).subscribe(customers => {
      this.customersList = customers;
    });

     return this.customersList;
}

getCustomersByPesel(pesel): Array<Customer> {
  this.httpService.findCustomersByPesel(pesel).subscribe(customers => {
   this.customersList = customers;
 });

  return this.customersList;
}

}
