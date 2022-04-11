import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';
import { OnasComponentModule } from '../../../projects/onas/src/lib/adapters/primary/ui/onas.component-module';
import { TomyComponentModule } from '../../../projects/tomy/src/lib/adapters/primary/ui/tomy.component-module';
import { FirebaseTomyServiceModule } from '../../../projects/tomy/src/lib/adapters/secondary/infrastructure/firebase-tomy.service-module';
import { TomydetalisComponentModule } from '../../../projects/tomy/src/lib/adapters/primary/ui/tomydetalis.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ]),
      TomydetalisComponentModule,
  OnasComponentModule,
  TomyComponentModule,
  FirebaseTomyServiceModule,
  TomydetalisComponentModule
],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
