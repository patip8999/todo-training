import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GłownaPage } from './głowna.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';
import { ContaktUsComponentModule } from '../../../projects/kontakt/src/publ/adapters/primary/ui/contakt-us.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: GłownaPage,
        }
      ]),
  OnasComponentModule,
  ContaktUsComponentModule
],
  	declarations: [GłownaPage],
  	providers: [],
  	exports: [] })
export class GłownaPageModule {
}
