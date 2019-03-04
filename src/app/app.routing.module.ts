import { AddCustomerComponent } from './add-customer/add-customer.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateCustomerComponent } from './customer-update/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer-delete/delete-customer/delete-customer.component';
import { FindCustomerComponent } from './customer-delete/find-customer/find-customer.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { FindUpdateComponent } from './customer-update/find-update/find-update.component';





const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/deleteCustomer',
    pathMatch: 'full'
  },
  {
    path: 'addCustomer',
    component: AddCustomerComponent
  },
  {
    path: 'updateCustomer',
    component: CustomerUpdateComponent,
    children: [
      {
        path: '',
        component: FindUpdateComponent
      },
      {
        path: ':id',
        component: UpdateCustomerComponent
      }
    ]
  },
  {
    path: 'deleteCustomer',
    component: CustomerDeleteComponent,
    children: [
      {
        path: '',
        component: FindCustomerComponent
      },
      {
        path: ':id',
        component: DeleteCustomerComponent
      }
    ]
  },
  {
    path: 'findCustomer',
    component: FindCustomerComponent,
    children: [
      {
        path: '',
        component: DeleteCustomerComponent
      },
      {
        path: ':id',
        component: UpdateCustomerComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
