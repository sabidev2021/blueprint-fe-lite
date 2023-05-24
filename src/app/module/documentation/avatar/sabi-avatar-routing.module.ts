import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SabiAvatarComponent} from "@app/module/documentation/avatar/sabi-avatar/sabi-avatar.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: SabiAvatarComponent}
    ])],
    exports: [RouterModule]
})
export class SabiAvatarRoutingModule {
}
