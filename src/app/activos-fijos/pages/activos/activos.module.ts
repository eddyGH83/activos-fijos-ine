import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivosComponent } from './activos.component';
import { ActivosRoutingModule } from './activos-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';


@NgModule({
  declarations: [
    ActivosComponent
  ],
  imports: [
    CommonModule,
    ActivosRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule
  ]
})
export class ActivosModule { }
