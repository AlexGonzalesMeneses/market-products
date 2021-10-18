import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPromotionsComponent } from './register-promotions/register-promotions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivePromotionsComponent } from './active-promotions/active-promotions.component';
import { PastPromotionsComponent } from './past-promotions/past-promotions.component';
import { ProductsToExpireComponent } from './products-to-expire/products-to-expire.component';
import { PromotionRoutingModule } from './promotion.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogNewPromotion, PromotionComponent } from './promotion.component';



@NgModule({
  declarations: [
    RegisterPromotionsComponent,
    ActivePromotionsComponent,
    PastPromotionsComponent,
    ProductsToExpireComponent,
    PromotionComponent,
    DialogNewPromotion
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PromotionRoutingModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
  ],
  exports:[
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PromotionModule { }
