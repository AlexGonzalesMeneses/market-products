import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/providers/components/confirm/confirm.component';
import { Provider } from 'src/app/providers/interfaces/provider.interface';
import { ProviderService } from 'src/app/providers/services/provider.service';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  @Input() products: Product[] = [];
  @Output() emiter: EventEmitter<string> = new EventEmitter()

  constructor( 
    public dialog: MatDialog,
    private productService: ProductService,
    private router: Router){

  }

  emit(){
    this.emiter.emit("reloadList");
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(DialogEditProducts, {
      width: '400px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  deleteProduct(product: Product) {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: product,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.productService
          .deleteProduct(product.id!)
          .subscribe((resp) => {
            this.emit()
          });
      }
    });
  }

  openIn(product: Product){
    this,this.router.navigate([`products/${product.id}`])
  }

}

@Component({
  selector: 'dialog-edit-product',
  templateUrl: 'dialog-edit-products.html',
})
export class DialogEditProducts implements OnInit{

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
    public dialogRef: MatDialogRef<DialogEditProducts>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }


  ngOnInit(){
    this.providerService.getProviders().subscribe((providers) => {
      this.providers = providers;
    });
    this.productService.getProductsById(this.data.id)
      .subscribe((product) => (this.product = product));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  edit(){
    if (this.product.name.trim().length === 0) {
      return;
    }

    if (this.product.id) {
      this.productService
        .updateProduct(this.product)
        .subscribe((product) => {
          this.openSnackBar('Registro actualizado', "Ok")
          this.cancel()
        });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

