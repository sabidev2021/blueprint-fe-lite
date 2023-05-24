import {Component} from '@angular/core';
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-sabi-badge',
    templateUrl: './sabi-badge.component.html',
    styleUrls: ['./sabi-badge.component.scss']
})
export class SabiBadgeComponent {
    url: string = env.design_systems.badge;
}
