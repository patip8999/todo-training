import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GłownaPageModule } from './pages/głowna.page-module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), GłownaPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
