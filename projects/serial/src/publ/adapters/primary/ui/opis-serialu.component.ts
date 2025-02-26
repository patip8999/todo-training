import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { SerialDTO } from 'projects/serial/src/lib/application/ports/secondary/serial.dto';
import { Observable, of } from 'rxjs';

@Component({ selector: 'lib-opis-serialu', templateUrl: './opis-serialu.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OpisSerialuComponent {
    serial$: Observable <SerialDTO[]>=of ([
        {opis: 'Gra o tron (ang. Game of Thrones) – amerykański serial fantasy stworzony przez Davida Benioffa i D.B. Weissa dla HBO, będący adaptacją cyklu powieści Pieśń lodu i ognia, autorstwa amerykańskiego pisarza George’a R.R. Martina. Amerykańska premiera pierwszego sezonu w HBO miała miejsce 17 kwietnia 2011 roku, w Polsce serial zadebiutował dzień później[2]. Od 18 kwietnia 2011 do 9 czerwca 2014 premiera nowego odcinka w Polsce odbywała się w poniedziałki o godzinie 22.00. Od 16 czerwca 2014 (finału czwartego sezonu) premiera polska odbywa się równolegle z amerykańską, czyli w nocy z niedzieli na poniedziałek o godzinie 3.00 czasu polskiego. Seria siódma i ósma (ostatnia), składały się, odpowiednio, z siedmiu i sześciu odcinków[3]. Ostatni odcinek serialu wyemitowano 19 maja 2019. Serial kręcony był w kilku krajach: Hiszpanii, Maroku, Islandii, Chorwacji, Wielkiej Brytanii (Irlandia Północna i Szkocja) i na Malcie[4].',
        image: '"assets/Images/Serial.jpg'}
    ])
}
