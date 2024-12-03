import { animate, state, style, transition, trigger } from "@angular/animations";

export const ani = trigger('ani', [
  state('shown',style({ transform: 'scale(0.8)',
    opacity: 0,
    backgroundcolor:'red'
  })),
  state('notshown',style({ transform: 'scale(0)',
    opacity: 1,
     backgroundcolor:'green'
  })),

  transition('noshown => shown', [

    animate('3s ease-in')
  ]),
  transition('shown => notshown', [
    animate('3s ease-out')
  ])
]);





