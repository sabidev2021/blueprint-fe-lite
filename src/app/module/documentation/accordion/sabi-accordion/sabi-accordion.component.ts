import {Component} from '@angular/core';
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-sabi-accordion',
    templateUrl: './sabi-accordion.component.html',
    styleUrls: ['./sabi-accordion.component.scss']
})
export class SabiAccordionComponent {

    url: string = env.design_systems.accordion;
    activeState: boolean[] = [true, false, false];
    question = [
        {
            id: 0,
            title: '1. Apakah Sabi adalah pinjol (pinjaman online)?',
            desc: 'Sabi bukan pinjol. Sabi menghubungkan ekosistem bisnis dengan lembaga keuangan seperti bank dan P2P lending.'
        },
        {
            id: 1,
            title: '2. Apakah Sabi adalah pinjol (pinjaman online)?',
            desc: 'Sabi bukan pinjol. Sabi menghubungkan ekosistem bisnis dengan lembaga keuangan seperti bank dan P2P lending.'
        },
        {
            id: 2,
            title: '3. Apakah Sabi adalah pinjol (pinjaman online)?',
            desc: 'Sabi bukan pinjol. Sabi menghubungkan ekosistem bisnis dengan lembaga keuangan seperti bank dan P2P lending.'
        },
        {
            id: 3,
            title: '4. Apakah Sabi adalah pinjol (pinjaman online)?',
            desc: 'Sabi bukan pinjol. Sabi menghubungkan ekosistem bisnis dengan lembaga keuangan seperti bank dan P2P lending.'
        },
        {
            id: 4,
            title: '5. Apakah Sabi adalah pinjol (pinjaman online)?',
            desc: 'Sabi bukan pinjol. Sabi menghubungkan ekosistem bisnis dengan lembaga keuangan seperti bank dan P2P lending.'
        },
    ];

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }

}
