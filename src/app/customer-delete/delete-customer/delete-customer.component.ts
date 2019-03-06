import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/app.component';
import { HttpService } from 'src/app/http.service';
import { DataBaseService } from 'src/app/data-base.service';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  deleteCustomerForm$: Observable<FormGroup>;

  customer$: Observable<Customer>;

  customers: Array<Customer>;

  id$: Observable<string>;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private dbService: DataBaseService) { }

  ngOnInit() {
    this.id$ = this.activatedRoute.paramMap.pipe(map(params => params.get('id')));
    this.customer$ = this.id$.pipe(switchMap(x => this.dbService.getCustomerById(x)));
    this.createForm();
  }

  delete() {
    this.id$.subscribe(id => this.dbService.getDeleteCustomer(id));
  }

  private createForm() {
    this.deleteCustomerForm$ = this.customer$.pipe(filter(x => x !== undefined), map(customer => {
      return new FormGroup({
        firstName: new FormControl({ value: customer.firstName, disabled: true }),
        lastName: new FormControl({ value: customer.lastName, disabled: true }),
        pesel: new FormControl({ value: customer.pesel, disabled: true }),
      });
    }));
  }

}
