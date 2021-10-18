import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './user/errors/error.component';
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
  // ,
  // {
  //   path: "products",
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: 'user/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
