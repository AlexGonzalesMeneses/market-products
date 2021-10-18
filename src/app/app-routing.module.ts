import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivePromotionsComponent } from './promotion/active-promotions/active-promotions.component';
import { PastPromotionsComponent } from './promotion/past-promotions/past-promotions.component';
import { ProductsToExpireComponent } from './promotion/products-to-expire/products-to-expire.component';
import { RegisterPromotionsComponent } from './promotion/register-promotions/register-promotions.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'registerPromotions', component: RegisterPromotionsComponent},
  {path: 'activePromotions', component: ActivePromotionsComponent},
  {path: 'pastPromotions', component: PastPromotionsComponent},
  {path: 'productsExpire', component: ProductsToExpireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
