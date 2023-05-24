import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(":enter", [
      style({
        transform: 'translateX(100%)',
        opacity: '0.1'
      }),
      animate('0.4s ease-in-out',
        style({transform: 'translateX(0%)'}))
    ], {optional: true}),
  ]),
]);
