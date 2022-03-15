import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contakt-us', templateUrl: './contakt-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContaktUsComponent {
  autor="Patrycja";
  submit(kontakt:FormGroup){
    this.autor=kontakt.get("telefon").value;
  }
  readonly kontakt: FormGroup = new FormGroup({imie: new FormControl(), nazwisko: new FormControl(), telefon: new FormControl()});



}
