import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Customer } from 'src/app/app.component';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from 'src/app/data-base.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm$: Observable<FormGroup>;

  customer$: Observable<Customer>;

  id$: Observable<string>;

  id: string;

  documents = ['Dowód osobisty', 'Paszport', 'Prawo jazdy'];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private dbService: DataBaseService) { }

  ngOnInit() {
    this.id$ = this.activatedRoute.paramMap.pipe(map(params => params.get('id')));
    this.customer$ = this.id$.pipe(switchMap(x => this.dbService.getCustomerById(x)));
    this.createForm();
  }

  update() {
    this.activatedRoute.paramMap.pipe(map(params => params.get('id'))).subscribe(id => {
      this.id = id;
    });

    this.customer$ = this.updateCustomerForm$.pipe(map(updateCustomerForm => {
      return new Customer({
        firstName: updateCustomerForm.value.firstName,
        lastName: updateCustomerForm.value.lastName,
        pesel: updateCustomerForm.value.pesel,
        sex: updateCustomerForm.value.sex,
        cardNumber: updateCustomerForm.value.cardNumber,
        dateOfBirth: updateCustomerForm.value.dateOfBirth,
        identityDocType: updateCustomerForm.value.identityDocType,
        identityDocNumber: updateCustomerForm.value.identityDocNumber,
        email: updateCustomerForm.value.email,
        address: {
          street: updateCustomerForm.value.street,
          propertyNo: updateCustomerForm.value.propertyNo,
          postCode: updateCustomerForm.value.postCode,
          city: updateCustomerForm.value.city,
        }
      });
    }
    ));

    this.customer$.subscribe(customer => this.httpService.updateCustomerPut(this.id, customer));
  }

  private createForm() {
    this.updateCustomerForm$ = this.customer$.pipe(map(customer => {
      return new FormGroup({
        firstName: new FormControl(customer.firstName),
        lastName: new FormControl(customer.lastName),
        pesel: new FormControl(customer.pesel),
        sex: new FormControl(customer.sex),
        cardNumber: new FormControl(customer.cardNumber),
        dateOfBirth: new FormControl(customer.dateOfBirth),
        identityDocType: new FormControl(customer.identityDocType),
        identityDocNumber: new FormControl(customer.identityDocNumber),
        email: new FormControl(customer.email),
        address: new FormGroup({
          street: new FormControl(customer.address.street),
          propertyNo: new FormControl(customer.address.propertyNo),
          postCode: new FormControl(customer.address.postCode),
          city: new FormControl(customer.address.city),
        })
      });
    }));
  }
}
