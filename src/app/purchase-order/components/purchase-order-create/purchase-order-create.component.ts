import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.css']
})
export class PurchaseOrderCreateComponent implements OnInit {

  constructor(private purchaseOrderService:PurchaseOrderService,
    private route:Router) { }

  ngOnInit(): void {
  }

  createOrder():void{
    let orden;
    this.purchaseOrderService.createOrder(orden).subscribe((resp) => {
      this.route.navigate(['/purchase-order/list-unfinished']);
    })
  }
}
