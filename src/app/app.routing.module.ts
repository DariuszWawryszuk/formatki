import { AddCustomerComponent } from './add-customer/add-customer.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/updateCustomer',
    pathMatch: 'full'
  },
  {
    path: 'addCustomer',
    component: AddCustomerComponent
  },
  {
    path: 'updateCustomer',
    component: UpdateCustomerComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
