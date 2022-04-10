import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomyComponent } from './tomy.component';
import { RouterModule, Routes } from '@angular/router';
import { TomydetalisPageModule } from  'src/app/pages/tomydetalis.page-module';


@NgModule({ imports: [CommonModule],
  	declarations: [TomyComponent],
  	providers: [],
  	exports: [TomyComponent] })
export class TomyComponentModule {
}
