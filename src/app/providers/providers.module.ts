import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { DialogCreateProvider, ListComponent } from './pages/list/list.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { CreateComponent } from './pages/create/create.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DialogEditProvider, ProvidersTableComponent } from './components/providers-table/providers-table.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    ProviderComponent,
    CreateComponent,
    ConfirmComponent,
    ProvidersTableComponent,
    DialogCreateProvider,
    DialogEditProvider
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    SharedModule,
    FlexLayoutModule,
  ]
})
export class ProvidersModule { }
