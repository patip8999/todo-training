import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateTomComponentModule } from '../../../projects/tomy/src/lib/adapters/primary/ui/create-tom.component-module';
import { FirebaseTomyServiceModule } from '../../../projects/tomy/src/lib/adapters/secondary/infrastructure/firebase-tomy.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminPage,
        }
      ]),
      CreateTomComponentModule,
  FirebaseTomyServiceModule
],
  	declarations: [AdminPage],
  	providers: [],
  	exports: [] })
export class AdminPageModule {
}
