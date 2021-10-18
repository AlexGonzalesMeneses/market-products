import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './errors/error.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    Error404Component
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    UserRoutingModule,
    FlexLayoutModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule {}
