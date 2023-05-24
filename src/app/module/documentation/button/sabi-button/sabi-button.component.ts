import {Component} from '@angular/core';
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-sabi-button',
    templateUrl: './sabi-button.component.html',
    styleUrls: ['./sabi-button.component.scss'],
})

export class SabiButtonComponent {

    url: string = env.design_systems.button;

}
