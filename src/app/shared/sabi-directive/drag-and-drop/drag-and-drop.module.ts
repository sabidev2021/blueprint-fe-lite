import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDirective} from './drag-drop.directive';

@NgModule({
    declarations: [
        DragDropDirective
    ],
    exports: [
        DragDropDirective
    ],
    imports: [
        CommonModule
    ]
})

export class DragAndDropModule {
}
