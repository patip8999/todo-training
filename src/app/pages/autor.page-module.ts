import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AutorPage } from './autor.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';
import { OpisAutoraComponentModule } from '../../../projects/autor/src/publ/adapters/primary/ui/opis-autora.component-module';
import { AutorbioComponentModule } from '../../../projects/autor/src/publ/adapters/primary/ui/autorbio.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AutorPage,
        }
      ]),
  OnasComponentModule,
  OpisAutoraComponentModule,
  AutorbioComponentModule
],
  	declarations: [AutorPage],
  	providers: [],
  	exports: [] })
export class AutorPageModule {
}
