import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TomyDTO } from '../../../application/ports/secondary/tomy.dto';
import { GETS_ONE_TOMY_DTO, GetsOneTomyDtoPort } from '../../../application/ports/secondary/gets-one-tomy.dto-port';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Component({ selector: 'lib-tomydetalis',
 templateUrl: './tomydetalis.component.html',
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush })
export class TomydetalisComponent {
  tomy$: Observable<TomyDTO> = this._contextDtoStoragePort.asObservable().pipe(switchMap
    (data => this._getsOneTomyDto.getOne(data.tomyid)));

  constructor(@Inject(GETS_ONE_TOMY_DTO) 
  private _getsOneTomyDto: GetsOneTomyDtoPort, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStoragePort: ContextDtoStoragePort
 ) {
  }
}
