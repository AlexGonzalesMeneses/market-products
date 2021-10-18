import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { PurchaseOrderListCompletedComponent } from './components/purchase-order-list-completed/purchase-order-list-completed.component';
import { PurchaseOrderListUnfinishedComponent } from './components/purchase-order-list-unfinished/purchase-order-list-unfinished.component';

const routes:Routes = [
  { path: '', children: [
    {path: 'create', component: PurchaseOrderCreateComponent},
    {path: 'list-completed', component: PurchaseOrderListCompletedComponent},
    {path: 'list-unfinished', component: PurchaseOrderListUnfinishedComponent},
    {path: '**', redirectTo: ''}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PurchaseOrderRoutingModule { }
