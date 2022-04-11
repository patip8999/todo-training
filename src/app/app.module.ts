import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentModule } from '@na-vigation';
import { InMemoryContextStorageModule } from 'projects/tomy/src/lib/adapters/secondary/infrastructure/in-memory-context.storage-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const firebaseConfig = {
  apiKey: "AIzaSyCei0Dg_LQlSJfKj-8nSdF2XuA0avz0fsA",
  authDomain: "patip89-6a5e4.firebaseapp.com",
  projectId: "patip89-6a5e4",
  storageBucket: "patip89-6a5e4.appspot.com",
  messagingSenderId: "818000077682",
  appId: "1:818000077682:web:6b8746785ecd360309f3eb",
  measurementId: "G-THRMPPEZKX"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    InMemoryContextStorageModule,
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
