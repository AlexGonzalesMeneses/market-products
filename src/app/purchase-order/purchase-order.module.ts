import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderListCompletedComponent } from './components/purchase-order-list-completed/purchase-order-list-completed.component';
import { PurchaseOrderListUnfinishedComponent } from './components/purchase-order-list-unfinished/purchase-order-list-unfinished.component';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { PurchaseOrderEditComponent } from './components/purchase-order-edit/purchase-order-edit.component';
import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';


@NgModule({
  declarations: [
    PurchaseOrderListCompletedComponent,
    PurchaseOrderListUnfinishedComponent,
    PurchaseOrderCreateComponent,
    PurchaseOrderEditComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule
  ]
})
export class PurchaseOrderModule { }
