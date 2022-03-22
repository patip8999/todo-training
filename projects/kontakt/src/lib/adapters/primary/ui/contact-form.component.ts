import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
  readonly kontakt: FormGroup = new FormGroup({email: new FormControl(), password: new FormControl()});
  OnFormSubmited (contactForm: FormGroup)
  {alert (contactForm.get('email').value);}
}
