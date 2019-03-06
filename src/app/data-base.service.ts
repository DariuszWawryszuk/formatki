import { Injectable } from '@angular/core';
import { Customer } from './app.component';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';


@Injectable()
export class DataBaseService {


  customer: Customer;

  customersList: Array<Customer>;

  constructor(private httpService: HttpService) { }

  getCustomerById(id: string): Observable<Customer> {
    return this.httpService.findByIdGet(id);
  }

  getCustomers(firstName, lastName, pesel): Observable<Array<Customer>> {
    return this.httpService.findCustomers(firstName, lastName, pesel);

  }

  getDeleteCustomer(id: string): Observable<Customer> {
    return this.httpService.deleteCustomer(id);
  }

}
