import { InjectionToken } from '@angular/core';
import { TomyDTO } from './tomy.dto';

export const ADDS_TOMY_DTO = new InjectionToken<AddsTomyDtoPort>('ADDS_TOMY_DTO');

export interface AddsTomyDtoPort {
  add(tomy: Partial<TomyDTO>): void;
}
