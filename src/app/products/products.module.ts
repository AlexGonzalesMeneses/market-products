import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DialogCreateProduct, ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';
import { CreateComponent } from './pages/create/create.component';
import { DialogEditProducts, ProductsTableComponent } from './components/products-table/products-table.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListComponent,
    ProductComponent,
    CreateComponent,
    ProductsTableComponent,
    DialogCreateProduct,
    DialogEditProducts,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports:[
    SharedModule,
    FlexLayoutModule
  ]
})
export class ProductsModule { }
