import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContaktUsComponentModule } from '../../../projects/kontakt/src/publ/adapters/primary/ui/contakt-us.component-module';
import { ContactFormComponentModule } from '../../../projects/kontakt/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactUsPage,
        }
      ]),
  ContaktUsComponentModule,
  ContactFormComponentModule
],
  	declarations: [ContactUsPage],
  	providers: [],
  	exports: [] })
export class ContactUsPageModule {
}
