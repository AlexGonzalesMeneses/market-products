import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.css']
})
export class PurchaseOrderCreateComponent implements OnInit {

  productId!:number;
  constructor(private purchaseOrderService:PurchaseOrderService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.productId = params['id'];
    })
  }

  createOrder():void{
    let orden;
    this.purchaseOrderService.createOrder(orden).subscribe((resp) => {
      this.router.navigate(['/purchase-order/list-unfinished']);
    })
  }
}
