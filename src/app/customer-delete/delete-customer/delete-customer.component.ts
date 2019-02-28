import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Customer } from 'src/app/app.component';
import { HttpService } from 'src/app/http.service';
import { DataBaseService } from 'src/app/data-base.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  deleteCustomerForm: FormGroup;

  customer: Customer;

  customers: Array<Customer>;

  id: string;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private dbService: DataBaseService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
     this.id = params.get('id');


    });
    console.log(this.id);
    this.customer = this.dbService.getCustomerById(this.id);
    console.log(this.customer);


    this.deleteCustomerForm = new FormGroup({
      firstName: new FormControl(this.customer.firstName),
      lastName: new FormControl(this.customer.lastName),
      pesel: new FormControl(this.customer.pesel),
    });
  }

}
