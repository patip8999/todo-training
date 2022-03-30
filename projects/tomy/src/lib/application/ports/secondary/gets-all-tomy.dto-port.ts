import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TomyDTO } from './tomy.dto';

export const GETS_ALL_TOMY_DTO = new InjectionToken<GetsAllTomyDtoPort>('GETS_ALL_TOMY_DTO');

export interface GetsAllTomyDtoPort {
  getAll(criterion?: Partial<TomyDTO>): Observable<TomyDTO[]>;
}
