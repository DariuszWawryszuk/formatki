import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AppRoutingModule } from './app.routing.module';
import { DataBaseService } from './data-base.service';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { UpdateCustomerComponent } from './customer-update/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer-delete/delete-customer/delete-customer.component';
import { FindCustomerComponent } from './customer-delete/find-customer/find-customer.component';




@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    FindCustomerComponent,
    CustomerDeleteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [HttpService, DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
