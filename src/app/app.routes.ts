import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';

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
  {
    path: 'comingsoon',
    component: ComingSoonComponent,
  },  
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '/' }   
];

export const appRouterModule = RouterModule.forRoot(routes);