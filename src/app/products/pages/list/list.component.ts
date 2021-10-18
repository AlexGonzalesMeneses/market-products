import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Provider } from 'src/app/providers/interfaces/provider.interface';
import { ProviderService } from 'src/app/providers/services/provider.service';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));

  }

  
  openDialogCreate(): void {
    const dialogRef = this.dialog.open(DialogCreateProduct, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadProducts()
    });
  }
}


@Component({
  selector: 'dialog-new-product',
  templateUrl: 'dialog-new-products.html',
})
export class DialogCreateProduct implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    vencimiento: '',
    providerId: 0,
  };

  providers: Provider[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog,
    private providerService: ProviderService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogCreateProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit(){
    this.providerService.getProviders().subscribe((providers) => {
      this.providers = providers;
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  create(){
    if (this.product.name.trim().length === 0) {
      return;
    }

    this.productService.postProducts(this.product).subscribe((product) => {
      this.dialogRef.close()
      this.openSnackBar('Registro creado', "OK");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
