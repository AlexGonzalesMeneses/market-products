import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';
import { CreateComponent } from './pages/create/create.component';
import { MaterialModule } from '../material/material.module';
import { ProductsTableComponent } from './components/products-table/products-table.component';


@NgModule({
  declarations: [
    ListComponent,
    ProductComponent,
    CreateComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
