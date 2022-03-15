import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaktUsComponent } from './contakt-us.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [ContaktUsComponent],
  	providers: [],
  	exports: [ContaktUsComponent] })
export class ContaktUsComponentModule {
}
