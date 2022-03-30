import { InjectionToken } from '@angular/core';
import { NowetomyDTO } from './nowetomy.dto';

export const ADDS_NOWETOMY_DTO = new InjectionToken<AddsNowetomyDtoPort>('ADDS_NOWETOMY_DTO');

export interface AddsNowetomyDtoPort {
  add(nowetomy: Partial<NowetomyDTO>): void;
}
