import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivePromotionsComponent } from './promotion/active-promotions/active-promotions.component';
import { PastPromotionsComponent } from './promotion/past-promotions/past-promotions.component';
import { RegisterPromotionsComponent } from './promotion/register-promotions/register-promotions.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'registerPromotions', component: RegisterPromotionsComponent},
  {path: 'activePromotions', component: ActivePromotionsComponent},
  {path: 'pastPromotions', component: PastPromotionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
