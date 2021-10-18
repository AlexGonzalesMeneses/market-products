import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { ActivePromotionsComponent } from "./active-promotions/active-promotions.component";
import { PastPromotionsComponent } from "./past-promotions/past-promotions.component";
import { ProductsToExpireComponent } from "./products-to-expire/products-to-expire.component";
import { PromotionComponent } from "./promotion.component";
import { RegisterPromotionsComponent } from "./register-promotions/register-promotions.component";

const routes: Routes = [
  {
    path: "",
    component: PromotionComponent,
    pathMatch: "full"
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
