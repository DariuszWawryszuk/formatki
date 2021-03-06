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

  findByIdGet(id: string): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/customer/' + id);
  }

  updateCustomerPut(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('http://localhost:8080/customer/update', customer);
  }

  deleteCustomer(id: string): Observable<Customer> {
    console.log(id, 'tra lala');
    return this.http.delete<Customer>('http://localhost:8080/customer/' + id);
  }

  findCustomers(firstName: string, lastName: string, pesel: string): Observable<Array<Customer>> {
    let param = new HttpParams();

    if (pesel !== null) {
      param = new HttpParams()
        .set('pesel', pesel);
    } else if (firstName !== null && lastName !== null) {
      param = new HttpParams()
        .set('firstName', firstName)
        .set('lastName', lastName);
    }

    return this.http.get<Array<Customer>>('http://localhost:8080/customer/search', { params: param });
  }

  findCustomersByPesel(pesel: string): Observable<Array<Customer>> {

    const param = new HttpParams()
      .set('pesel', pesel);

    return this.http.get<Array<Customer>>('http://localhost:8080/customer/search', { params: param });
  }
}
