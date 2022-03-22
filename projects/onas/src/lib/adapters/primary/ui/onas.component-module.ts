import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnasComponent } from './onas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({ imports: [CommonModule,ReactiveFormsModule, AppRoutingModule],
  	declarations: [OnasComponent],
  	providers: [],
  	exports: [OnasComponent] })
export class OnasComponentModule {
}
