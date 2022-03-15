import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GłownaPageModule } from './pages/głowna.page-module';
import { OnasPageModule } from './pages/onas.page-module';
import { AutorPageModule } from './pages/autor.page-module';
import { SerialPageModule } from './pages/serial.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';

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

@NgModule({
  imports: [RouterModule.forRoot(routes), GłownaPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
