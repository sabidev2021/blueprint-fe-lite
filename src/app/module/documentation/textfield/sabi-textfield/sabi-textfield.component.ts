import { Component } from '@angular/core';

@Component({
  selector: 'app-sabi-textfield',
  templateUrl: './sabi-textfield.component.html',
  styleUrls: ['./sabi-textfield.component.scss']
})
export class SabiTextfieldComponent {

  disabled: boolean = true;
  value1: string = '';
  value2: string = '';
  value3: string = '';
  value4: string = '';
  value5: string = 'Disabled';
  value6: string = '';
  valueMask1: string = '';
  valueMask2: string = '';
  valueMask3: string = '';
  valueMask4: string = '';

  submitTest() {
    console.log('valueMask1 : ', this.valueMask1);
    console.log('valueMask2 : ', this.valueMask2);
  }

}
