import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sabi-floating-cta',
  templateUrl: './sabi-floating-cta.component.html',
  styleUrls: ['./sabi-floating-cta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SabiFloatingCtaComponent {

  @Input() default!: boolean;
  @Input() labelLeft!: string;
  @Input() labelRight!: string;
  @Input() pathLeft: string | undefined;
  @Input() pathRight: string | undefined;
  @Input() size!: string;
  @Input() loader!: boolean;
  @Input() disabled!: boolean;
  @Input() title!: string;

}
