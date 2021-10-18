import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/interfaces/product.interface';
import { ProductService } from 'src/app/products/services/product.service';
import { Provider } from 'src/app/providers/interfaces/provider.interface';
import { ProviderService } from 'src/app/providers/services/provider.service';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.css']
})
export class PurchaseOrderCreateComponent implements OnInit {

  productId!:number;
  statesOrder:string[]=['PEN','APR','FIN','LIQ','ANL'];
  receivedTypes:string[] = ['RP','RT'];
  paymentStatus:string[] = ['NO_PAYMENT','PARTIAL_PAYMENT','FULLY_PAID'];
  producto:Product = {name:'',vencimiento:'', providerId: 0}
  provider:Provider = {name: '', lastname: '', phone: '', email: ''};
  formGroup!:FormGroup;

  constructor(private purchaseOrderService:PurchaseOrderService,
    private router:Router,
    private route:ActivatedRoute,
    private productService:ProductService,
    private providerService:ProviderService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.productId = params['id'];
      this.getProducto();
    });
    this.formGroup = this.formBuilder.group({
      stateOrder: ['0',Validators.required],
      receivedType: ['0',Validators.required],
      paymentStatu: ['0',Validators.required],
      totalAmount: ['',Validators.required],
      providerID: ['',Validators.required]
    })
  }

  get stateOrder():FormControl{
    return this.formGroup.get('stateOrder') as FormControl;
  }
  get receivedType():FormControl{
    return this.formGroup.get('receivedType') as FormControl;
  }
  get paymentStatu():FormControl{
    return this.formGroup.get('paymentStatu') as FormControl;
  }
  get totalAmount():FormControl{
    return this.formGroup.get('totalAmount') as FormControl;
  }
  get providerID():FormControl{
    return this.formGroup.get('providerID') as FormControl;
  }

  createOrder():void{
    let orden;
    orden = this.formGroup.value
    orden.providerID = this.producto.providerId;
    console.log(orden);
    this.purchaseOrderService.createOrder(orden).subscribe((resp) => {
      this.router.navigate(['/purchase-order/list-unfinished']);
    })
  }

  getProducto():void{
    this.productService.getProductsById(this.productId).subscribe((resp)=>{
      this.producto = resp;
      this.getProvider(resp.providerId);
    })
  }
  getProvider(id:number):void{
    this.providerService.getProviderById(id).subscribe((resp)=>{
      this.provider = resp;
    });
  }
}
