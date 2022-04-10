import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TomydetalisPage } from './tomydetalis.page';
import { TomydetalisComponentModule } from '@tomy';
@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: 'name',
          component: TomydetalisPage,
        }
      ]),
      TomydetalisComponentModule,
    ],
  	declarations: [TomydetalisPage],
  	providers: [],
  	exports: [] })
export class TomydetalisPageModule {
}
