import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPromotionsComponent } from './register-promotions/register-promotions.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterPromotionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterPromotionsComponent
  ]
})
export class PromotionModule { }
