import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
