import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TomyDTO } from '../../../application/ports/secondary/tomy.dto';
import { GETS_ALL_TOMY_DTO, GetsAllTomyDtoPort } from '../../../application/ports/secondary/gets-all-tomy.dto-port';

@Component({ selector: 'lib-tomy', templateUrl: './tomy.component.html',
 encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TomyComponent {
  tomy$: Observable<TomyDTO[]> = this._getsAllTomyDto.getAll();

  constructor(@Inject(GETS_ALL_TOMY_DTO) private _getsAllTomyDto: GetsAllTomyDtoPort) {
  }
}
