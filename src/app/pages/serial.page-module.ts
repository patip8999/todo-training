import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SerialPage } from './serial.page';
import { OpisSerialuComponentModule } from '../../../projects/serial/src/publ/adapters/primary/ui/opis-serialu.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: SerialPage,
        }
      ]),
  OpisSerialuComponentModule
],
  	declarations: [SerialPage],
  	providers: [],
  	exports: [] })
export class SerialPageModule {
}
