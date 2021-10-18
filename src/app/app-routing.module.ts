import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterPromotionsComponent } from './promotion/register-promotions/register-promotions.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'registerPromotions', component: RegisterPromotionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
