import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'slider',
    component: SliderComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: 'accordion',
   	component: AccordionComponent,
  },
  {
    path: 'modalpopup',
   	component: ModalPopupComponent,
  },
  { path: '**', redirectTo: '/' }   
];

export const appRouterModule = RouterModule.forRoot(routes);