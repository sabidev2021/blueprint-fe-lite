import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {InputService} from "@app/module/input/services/input.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  formGroup!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private inputService: InputService,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group ({
      name: '',
      username: '',
      phone: '',
      email: '',
      address: '',
      file: [File],
    })
  }

  onUpload(event: any) {
    console.log('event :', event);
    // const file = event.currentFiles.value;
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   console.log(reader.result);
    //   this.formGroup.patchValue({file: reader.result})
    // };
    this.formGroup.patchValue({file: event})
  }

  numberOnly(event: any) {
    let charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  submitForm() {
    console.log('formGroup : ', this.formGroup.value);
    this.inputService.submit(this.formGroup.value).subscribe({
      next: (result: any) => {
        console.log('result : ', result);
      }
    })
  }

}
