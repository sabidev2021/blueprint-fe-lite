import { Component } from '@angular/core';
import {environment as env} from "@env/environment.dev";

@Component({
  selector: 'app-sabi-avatar',
  templateUrl: './sabi-avatar.component.html',
  styleUrls: ['./sabi-avatar.component.scss']
})
export class SabiAvatarComponent {
  url: string = env.design_systems.avatar;
}
