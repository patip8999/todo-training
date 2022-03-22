import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TomyDTO } from '../../../application/ports/secondary/tomy.dto';

@Component({ selector: 'lib-onas', templateUrl: './onas.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OnasComponent {
    tom: Observable<TomyDTO[]> = of([
        {
            title: " Gra o tron",
            image: "assets/Images/Tom01.jpg",

        }])

    autor = "Autor";

    onclick() {
        alert("Patrycja Pietrzak")

    }
}
