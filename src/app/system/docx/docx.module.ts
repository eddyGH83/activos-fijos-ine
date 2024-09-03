import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocxComponent } from './docx.component';
import { DocxService } from './service/docx.service';
import { DocxRoutingModule } from './docx-routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DocxComponent
  ],
  imports: [
    CommonModule,
    DocxRoutingModule,
    ButtonModule,
  ],
  providers: [
    DocxService
  ],
})
export class DocxModule { }
