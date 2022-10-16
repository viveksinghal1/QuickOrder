import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInComponent } from './logged-in.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
