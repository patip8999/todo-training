import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ]),
  OnasComponentModule
],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
