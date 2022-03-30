import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomyComponent } from './tomy.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TomyComponent],
  	providers: [],
  	exports: [TomyComponent] })
export class TomyComponentModule {
}
