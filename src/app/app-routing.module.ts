import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path:'', redirectTo: '/clients', pathMatch: "full"},
  {path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  {path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  {path: '**', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
