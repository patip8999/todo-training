import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TomyDTO } from './tomy.dto';

export const GETS_ONE_TOMY_DTO = new InjectionToken<GetsOneTomyDtoPort>('GETS_ONE_TOMY_DTO');

export interface GetsOneTomyDtoPort {
  getOne(id: string): Observable<TomyDTO>;
}
