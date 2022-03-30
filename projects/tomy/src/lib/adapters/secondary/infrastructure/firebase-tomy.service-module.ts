import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTomyService } from './firebase-tomy.service';
import { GETS_ALL_TOMY_DTO } from '../../../application/ports/secondary/gets-all-tomy.dto-port';
import { ADDS_TOMY_DTO } from '../../../application/ports/secondary/adds-tomy.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTomyService, { provide: GETS_ALL_TOMY_DTO, useExisting: FirebaseTomyService }, { provide: ADDS_TOMY_DTO, useExisting: FirebaseTomyService }],
  	exports: [] })
export class FirebaseTomyServiceModule {
}
