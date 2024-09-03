import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocxComponent } from './docx.component';

const routes: Routes = [
    { path: '', component: DocxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocxRoutingModule { }

