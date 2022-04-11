import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TomyDetalisPage } from './tomy-detalis.page';
import { TomydetalisComponentModule } from '../../../projects/tomy/src/lib/adapters/primary/ui/tomydetalis.component-module';
import { FirebaseTomyServiceModule } from '../../../projects/tomy/src/lib/adapters/secondary/infrastructure/firebase-tomy.service-module';


@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: ':tomyId',
          component: TomyDetalisPage,
        }
      ]),
  TomydetalisComponentModule,
  FirebaseTomyServiceModule
],
  	declarations: [TomyDetalisPage],
  	providers: [],
  	exports: [] })
export class TomyDetalisPageModule {
}
