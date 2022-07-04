import {
   trigger,
   transition,
   style,
   query,
   group,
   animateChild,
   animate,
   keyframes,
   state,
} from '@angular/animations';

// export const routerTransition = trigger('routeAnimations', [
//    transition('* <=> *', [
//       // Set a default  style for enter and leave
//       transition(
//          '* => *',
//          group([
//             query(
//                ':enter',
//                [
//                   style({
//                      position: 'absolute',
//                      left: 0,
//                      width: '100%',
//                      height: '100%',
//                      opacity: 0,
//                      transform: 'scale(1.05)',
//                   }),
//                   group([
//                      animate(
//                         '200ms ease',
//                         style({ opacity: 1, transform: 'scale(1)' })
//                      ),
//                      animateChild(),
//                   ]),
//                ],
//                { optional: true }
//             ),
//             query(
//                ':leave',
//                [
//                   style({
//                      position: 'absolute',
//                      left: 0,
//                      width: '100%',
//                      height: '100%',
//                      opacity: 1,
//                      transform: 'scale(1)',
//                   }),
//                   group([
//                      animate(
//                         '150ms ease',
//                         style({ opacity: 0, transform: 'scale(0.95)' })
//                      ),
//                      animateChild(),
//                   ]),
//                ],
//                { optional: true }
//             ),
//             animateChild(),
//          ])
//       ),
//    ]),
//    trigger('containerAnimation', [
//       state('small', style({ width: '350px' })),
//       state('big', style({ width: '500px' })),
//       transition(
//          '* => *',
//          group([
//             query('@routeAnimations', animateChild()),
//             animate('0.2s ease'),
//          ])
//       ),
//    ]),
// ]);

const slideTo = (direction: string) => {
   const optional = { optional: true };
   return [
      query(
         ':enter :leave',
         [
            style({
               position: 'absolute',
               top: 0,
               [direction]: 0,
               width: '100%',
            }),
         ],
         optional
      ),
      query(':enter', [style({ [direction]: '-100%' })]),
      group([
         query(
            ':leave',
            [animate('2000ms ease', style({ [direction]: '100%' }))],
            optional
         ),
         query(':enter', [
            animate('2000ms ease', style({ [direction]: '0%' })),
         ]),
      ]),
      group([
         query('@routeAnimations', animateChild(), optional),
         animate('2000ms ease'),
      ]),
   ];
};

export const slide = trigger('routeAnimations', [
   transition('* => isLeft', slideTo('left')),
   transition('* => isRight', slideTo('right')),
   transition('isRight => *', slideTo('left')),
   transition('isLeft => *', slideTo('right')),
]);
