import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TOMY_DTO, AddsTomyDtoPort } from '../../../application/ports/secondary/adds-tomy.dto-port';

@Component({ selector: 'lib-create-tom', templateUrl: './create-tom.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CreateTomComponent {
  readonly createToms: 
  FormGroup = new FormGroup
  ({
      bio: new FormControl(),
      imageUrl: new FormControl()});

  constructor(@Inject(ADDS_TOMY_DTO) private _addsTomyDto: AddsTomyDtoPort) {
  }

  onCreateTomSubmited(createToms: FormGroup): void {
      if (createToms.invalid) {
          return;
      }
    this._addsTomyDto.add({
        bio: createToms.get ('bio')?.value,
        imageUrl: createToms.get ('imageUrl')?.value
    });
    this.createToms.reset();}
}
