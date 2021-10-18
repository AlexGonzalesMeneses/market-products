import { Component, OnInit } from '@angular/core';
import { IPurchaseOrder } from '../../interfaces/purchase-order.interface';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-list-completed',
  templateUrl: './purchase-order-list-completed.component.html',
  styleUrls: ['./purchase-order-list-completed.component.css']
})
export class PurchaseOrderListCompletedComponent implements OnInit {

  public listaOrdenes:IPurchaseOrder[] = [];
  constructor(private purchaseOrderService:PurchaseOrderService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos():void{
    this.purchaseOrderService.getPurchaseOrderCompleted().subscribe((resp)=>{
      this.listaOrdenes = resp;
    })
  }
}
