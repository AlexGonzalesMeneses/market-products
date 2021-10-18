import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styles: [
    `
      tr {
        cursor: pointer;
      }
    `,
  ],
})
export class ProductsTableComponent {
  @Input() products: Product[] = [];
}