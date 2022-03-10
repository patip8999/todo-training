import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SerialPage } from './serial.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: SerialPage,
        }
      ])],
  	declarations: [SerialPage],
  	providers: [],
  	exports: [] })
export class SerialPageModule {
}
