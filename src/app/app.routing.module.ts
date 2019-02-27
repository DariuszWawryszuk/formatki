import { AddCustomerComponent } from './add-customer/add-customer.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/findCustomer',
    pathMatch: 'full'
  },
  {
    path: 'addCustomer',
    component: AddCustomerComponent
  },
  {
    path: 'updateCustomer',
    component: UpdateCustomerComponent
  },
  {
    path: 'deleteCustomer',
    component: DeleteCustomerComponent
  },
  {
    path: 'findCustomer',
    component: FindCustomerComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
