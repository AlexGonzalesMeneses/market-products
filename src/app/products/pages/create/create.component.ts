import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from 'src/app/providers/components/confirm/confirm.component';
import { Provider } from 'src/app/providers/interfaces/provider.interface';
import { ProviderService } from 'src/app/providers/services/provider.service';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [],
})
export class CreateComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    vencimiento: '',
    providerId: 0,
  };

  providers: Provider[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private providerService: ProviderService
  ) {}

  ngOnInit(): void {
    this.providerService.getProviders().subscribe((providers) => {
      this.providers = providers;
    });

    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productService.getProductsById(id)))
      .subscribe((product) => (this.product = product));
  }

  save() {
    if (this.product.name.trim().length === 0) {
      return;
    }

    if (this.product.id) {
      this.productService
        .updateProduct(this.product)
        .subscribe((product) => this.mostrarSnakbar('Registro actualizado'));
    } else {
      this.productService.postProducts(this.product).subscribe((product) => {
        this.router.navigate(['/products/edit', product.id]);
        this.mostrarSnakbar('Registro creado');
      });
    }
  }

  deleteProduct() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.product,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.productService
          .deleteProduct(this.product.id!)
          .subscribe((resp) => {
            this.router.navigate(['/products']);
          });
      }
    });
  }

  mostrarSnakbar(message: string) {
    this.snackBar.open(message, 'ok!', {
      duration: 2500,
    });
  }
}
