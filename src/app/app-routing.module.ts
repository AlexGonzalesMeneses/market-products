import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
