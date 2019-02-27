import { Injectable } from '@angular/core';
import { Customer } from './app.component';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';


@Injectable()
export class DataBaseService {


  customer: Customer;

  customersList: Array<Customer>;

  constructor(private httpService: HttpService) { }

  getCourseById(id: string): Customer {
    return this.customersList.find(e => e.id === id);
  }

  getCustomers(firstName, lastName, pesel): Array<Customer> {
     this.httpService.findCustomers(firstName, lastName, pesel).subscribe(customers => {
      console.log(customers);
      this.customersList = customers;
    });

     return this.customersList;
}

}
