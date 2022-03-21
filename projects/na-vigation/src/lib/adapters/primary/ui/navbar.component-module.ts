import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPageModule } from 'src/app/pages/contact-us.page-module';
import { OnasPageModule } from 'src/app/pages/onas.page-module';
import { GłownaPageModule } from 'src/app/pages/głowna.page-module';
import { AutorPageModule } from 'src/app/pages/autor.page-module';
import { SerialPageModule } from 'src/app/pages/serial.page-module';

const routes: Routes = [{ 
	path: 'onas', 
	loadChildren: () => OnasPageModule
  },
{ 
	path: 'głowna', 
	loadChildren: () => GłownaPageModule
  },
{ 
	path: 'autor', 
	loadChildren: () => AutorPageModule
  },
{ 
	path: 'serial', 
	loadChildren: () => SerialPageModule
  },
{ 
	path: 'Kontakt', 
	loadChildren: () => ContactUsPageModule
  }
];
@NgModule({ imports: [CommonModule, RouterModule.forRoot(routes), GłownaPageModule],
	declarations: [NavbarComponent],
	providers: [],
	exports: [NavbarComponent, RouterModule] })
export class NavbarComponentModule {
}