import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { CreateComponent } from './pages/create/create.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ProvidersTableComponent } from './components/providers-table/providers-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    ProviderComponent,
    CreateComponent,
    ConfirmComponent,
    ProvidersTableComponent,
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProvidersModule { }
