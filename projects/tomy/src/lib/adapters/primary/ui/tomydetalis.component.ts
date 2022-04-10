import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TomyDTO } from '../../../application/ports/secondary/tomy.dto';
import { GETS_ONE_TOMY_DTO, GetsOneTomyDtoPort } from '../../../application/ports/secondary/gets-one-tomy.dto-port';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-tomydetalis',
 templateUrl: './tomydetalis.component.html',
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush })
export class TomydetalisComponent {
  tomy$: Observable<TomyDTO> = this._getsOneTomyDto.getOne(
    this._activatedRoute.snapshot.params.tomyId
  );

  constructor(@Inject(GETS_ONE_TOMY_DTO) 
  private _getsOneTomyDto: GetsOneTomyDtoPort,
  private _activatedRoute: ActivatedRoute) {
  }
}
