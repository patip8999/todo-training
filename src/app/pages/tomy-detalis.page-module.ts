import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TomyDetalisPage } from './tomy-detalis.page';
import { TomydetalisComponentModule } from '../../../projects/tomy/src/lib/adapters/primary/ui/tomydetalis.component-module';
import { FirebaseTomyServiceModule } from '../../../projects/tomy/src/lib/adapters/secondary/infrastructure/firebase-tomy.service-module';
import { TomyIdResolverModule } from '@tomy';
import { TomyIdResolver } from 'projects/tomy/src/lib/adapters/primary/ui/tomy-id.resolver';


@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: ':tomyId',
          component: TomyDetalisPage,
          resolve: {
            tomyId: TomyIdResolver
          }
        }
      ]),
  TomydetalisComponentModule,
  FirebaseTomyServiceModule,
  TomyIdResolverModule
],
  	declarations: [TomyDetalisPage],
  	providers: [],
  	exports: [] })
export class TomyDetalisPageModule {
}
