import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTomyDtoPort } from '../../../application/ports/secondary/gets-all-tomy.dto-port';
import { TomyDTO } from '../../../application/ports/secondary/tomy.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsTomyDtoPort } from '../../../application/ports/secondary/adds-tomy.dto-port';

@Injectable()
export class FirebaseTomyService implements GetsAllTomyDtoPort, AddsTomyDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<TomyDTO>): Observable<TomyDTO[]> {
    return this._client.collection<TomyDTO>('Tomy').valueChanges(({idField: 'id'})).pipe(map((data: TomyDTO[]) => filterByCriterion(data, criterion)));
  }

  add(tomy: Partial<TomyDTO>): void {
    this._client.collection('tomies').add(tomy);
  }
}
