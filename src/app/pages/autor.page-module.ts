import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutorPage } from './autor.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AutorPage,
        }
      ])],
  	declarations: [AutorPage],
  	providers: [],
  	exports: [] })
export class AutorPageModule {
}
