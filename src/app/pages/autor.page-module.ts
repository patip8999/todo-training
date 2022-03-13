import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutorPage } from './autor.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AutorPage,
        }
      ]),
  OnasComponentModule
],
  	declarations: [AutorPage],
  	providers: [],
  	exports: [] })
export class AutorPageModule {
}
