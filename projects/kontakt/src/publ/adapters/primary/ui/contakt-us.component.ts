import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contakt-us', templateUrl: './contakt-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContaktUsComponent{
  
  readonly messageForm: FormGroup = new FormGroup({imie: new FormControl(), nazwisko: new FormControl(), telefon: new FormControl()});
  
  onFormSubmited(messageForm: FormGroup): void {console.log(messageForm.getRawValue());}

}
