import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPromotionsComponent } from './register-promotions/register-promotions.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivePromotionsComponent } from './active-promotions/active-promotions.component';
import { PastPromotionsComponent } from './past-promotions/past-promotions.component';
import { ProductsToExpireComponent } from './products-to-expire/products-to-expire.component';



@NgModule({
  declarations: [
    RegisterPromotionsComponent,
    ActivePromotionsComponent,
    PastPromotionsComponent,
    ProductsToExpireComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterPromotionsComponent,
    ActivePromotionsComponent,
    PastPromotionsComponent,
    ProductsToExpireComponent
  ]
})
export class PromotionModule { }
