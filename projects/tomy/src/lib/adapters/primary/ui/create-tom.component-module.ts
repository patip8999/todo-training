import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTomComponent } from './create-tom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateTomComponent],
  	providers: [],
  	exports: [CreateTomComponent] })
export class CreateTomComponentModule {
}
