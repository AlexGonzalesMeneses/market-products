import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';
import { IPurchaseOrder } from '../../interfaces/purchase-order.interface';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-list-unfinished',
  templateUrl: './purchase-order-list-unfinished.component.html',
  styleUrls: ['./purchase-order-list-unfinished.component.css']
})
export class PurchaseOrderListUnfinishedComponent implements OnInit {

  public listaOrdenes:IPurchaseOrder[] = [];
  constructor(private purchaseOrderService:PurchaseOrderService,
    private router:Router,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos():void{
    this.purchaseOrderService.getPurchaseOrderUnfinished().subscribe((resp)=>{
      this.listaOrdenes = resp;
    })
  }

  editar(idEdit:number):void{
    console.log("me ejecuto")
    //this.router.navigate(['/purchase-order/edit/',{id:idEdit}]);
  }

  finalizar(id:number | undefined):void{
    let valor = {stateOrder:'FIN'}
    this.purchaseOrderService.finalizarPurcharse(id!,valor).subscribe((resp)=>{
      this.router.navigate(['/purchase-order/list-completed']);
    });
  }

  getProducto(id:number):string{
    let nombre='';
    this.productService.getProductsById(id).subscribe((resp)=>{
      nombre = resp.name;
    });
    return nombre;
  }
}
