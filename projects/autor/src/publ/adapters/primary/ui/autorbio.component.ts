import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AutorlistDTO } from '../../../application/ports/secondary/autorlist.dto';

@Component({ selector: 'lib-autorbio', templateUrl: './autorbio.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AutorbioComponent {
    opis$: Observable<AutorlistDTO[]>=of([
        {opis: 'George R R Martin właśc George Raymond Richard Martin ur 20 września 1948 w Bayonne w stanie New Jersey – amerykański pisarz, twórca science fiction, fantasy i horrorów, zarówno opowiadań, jak i powieści, wielokrotny zdobywca nagród Nebula i Hugo oraz wielu innych: World Fantasy, Bram Stoker Award, czy Locus Award Początkowo publikował pod nazwiskiem pozbawionym dwóch R, które dołączył, gdy zaczęto go mylić z producentem płyt The Beatles. Jego utwory przetłumaczono na dziesiątki języków, w tym polski. Jest autorem cyklu fantasy Pieśń lodu i ognia, na którym oparto między innymi serial Gra o tron wyprodukowany przez HBO 2011-2019 grę fabularną A Game of Thrones, komiks oraz szereg gier komputerowych. Na podstawie jego innych prac nakręcono kilka filmów i odcinków serii telewizyjnych Remembering Melody, 1984; Nightflyers, 1987; Sandkings, 1995. George R.R. Martin współpracował także przy tworzeniu różnych projektów telewizyjnych m.in. Strefa mroku, Piękna i Bestia, Doorways Martin pisze za pomocą edytora tekstu WordStar 4.0 dla systemu operacyjnego DOS',
zdjecie:'assets/Images/George.jpg'

        }
    ])
}
