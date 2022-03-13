import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-onas', templateUrl: './onas.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OnasComponent {
   autor="Autor";
 
   onclick(){
       alert("Patrycja Pietrzak")
       
   }
}

