import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnasComponent } from './onas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OnasPageModule } from 'src/app/pages/onas.page-module';


@NgModule({ imports: [CommonModule,ReactiveFormsModule],
  	declarations: [OnasComponent],
  	providers: [],
  	exports: [OnasComponent] })
export class OnasComponentModule {
}
