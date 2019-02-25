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
}
