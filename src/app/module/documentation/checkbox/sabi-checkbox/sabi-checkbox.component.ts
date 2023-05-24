import {Component, OnInit} from '@angular/core';
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-sabi-checkbox',
    templateUrl: './sabi-checkbox.component.html',
    styleUrls: ['./sabi-checkbox.component.scss']
})
export class SabiCheckboxComponent implements OnInit {

    url: string = env.design_systems.checkbox;
    selectedCities: string[] = [];
    selectedCategories: any[] = ['Technology', 'Sports'];
    categories: any[] = [
        {
            name: 'Accounting',
            key: 'A'
        },
        {
            name: 'Marketing',
            key: 'M'
        },
        {
            name: 'Production',
            key: 'P'
        }, {
            name: 'Research',
            key: 'R'
        }
    ];
    checked: boolean = false;

    ngOnInit() {
        this.initCheckbox()
    }

    initCheckbox() {
        this.selectedCategories = this.categories.slice(1, 3);
    }

}
