import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    AdminLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    SharedMaterialModule,
    NavbarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ]
})
export class SharedModule { }
