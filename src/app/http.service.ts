import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './app.component';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  addPost(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8080/customer/create', customer);

  }

  findByIdGet(id: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/customer/' + id);
  }

  updateCustomerPut(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('http://localhost:8080/customer/update', customer);
  }

  deleteCustomer(firstName: string, lastName: string, pesel: string): Observable<Array<Customer>> {
    console.log(firstName);
    const param = new HttpParams()
      .set('firstName', firstName);

    return this.http.get<Array<Customer>>('http://localhost:8080/customer/search', { params: param });
  }
}
