import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TomyDTO } from '../../../application/ports/secondary/tomy.dto';
import { GETS_ALL_TOMY_DTO, GetsAllTomyDtoPort } from '../../../application/ports/secondary/gets-all-tomy.dto-port';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Component({ selector: 'lib-tomy', templateUrl: './tomy.component.html',
 encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TomyComponent {
  tomy$: Observable<TomyDTO[]> = this._getsAllTomyDto.getAll();

  constructor(@Inject(GETS_ALL_TOMY_DTO) private _getsAllTomyDto: GetsAllTomyDtoPort, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStorage: ContextDtoStoragePort
  ){}

  onTomyClicked(Tomy: TomyDTO): void {
    this._contextDtoStorage.next({tomyid: Tomy.id});
  }
}
