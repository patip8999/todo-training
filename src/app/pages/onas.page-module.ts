import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';
import { TomyComponentModule } from '../../../projects/tomy/src/lib/adapters/primary/ui/tomy.component-module';
import { FirebaseTomyServiceModule } from '../../../projects/tomy/src/lib/adapters/secondary/infrastructure/firebase-tomy.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ]),
  OnasComponentModule,
  TomyComponentModule,
  FirebaseTomyServiceModule
],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
