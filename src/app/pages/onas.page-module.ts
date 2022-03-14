import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';
import { OpisAutoraComponentModule } from '../../../projects/autor/src/publ/adapters/primary/ui/opis-autora.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ]),
  OnasComponentModule,
  OpisAutoraComponentModule
],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
