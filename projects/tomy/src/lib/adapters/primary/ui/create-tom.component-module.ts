import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTomComponent } from './create-tom.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateTomComponent],
  	providers: [],
  	exports: [CreateTomComponent] })
export class CreateTomComponentModule {
}
