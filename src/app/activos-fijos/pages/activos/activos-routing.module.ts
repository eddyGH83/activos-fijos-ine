import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivosComponent } from './activos.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ActivosComponent }
	])],
	exports: [RouterModule]
})
export class ActivosRoutingModule { }