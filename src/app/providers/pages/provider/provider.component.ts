import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/products/interfaces/product.interface';
import { ProductService } from 'src/app/products/services/product.service';
import { Provider } from '../../interfaces/provider.interface';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styles: [],
})
export class ProviderComponent implements OnInit {
  provider!: Provider;
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.providerService.getProviderById(id)))
      .subscribe((provider) => (this.provider = provider));

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.productService.getProductsByProviderId(id))
      )
      .subscribe((products) => (this.products = products));
  }

  back() {
    this.router.navigate(['/providers/list']);
  }
}
