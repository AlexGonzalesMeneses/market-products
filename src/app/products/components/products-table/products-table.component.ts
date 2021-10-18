import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styles: [],
})
export class ProductsTableComponent {
  @Input() products: Product[] = [];
}
