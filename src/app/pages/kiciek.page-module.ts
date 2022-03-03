import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KiciekPage } from './kiciek.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: KiciekPage,
        }
      ])],
  	declarations: [KiciekPage],
  	providers: [],
  	exports: [] })
export class KiciekPageModule {
}
