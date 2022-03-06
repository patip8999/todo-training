import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GłownaPage } from './głowna.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: GłownaPage,
        }
      ])],
  	declarations: [GłownaPage],
  	providers: [],
  	exports: [] })
export class GłownaPageModule {
}
