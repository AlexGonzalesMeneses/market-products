import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: 'products', 
    pathMatch: 'full'
  },
  {
    path: "user",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      }
    ]
  },
  {
    path: "promotions",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./promotion/promotion.module').then((m) => m.PromotionModule),
      }
    ]
  },
  {
    path: "providers",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./providers/providers.module').then((m) => m.ProvidersModule),
      }
    ]
  },
  {
    path: "products",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'user/not-found'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
