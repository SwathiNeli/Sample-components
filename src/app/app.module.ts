import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouterModule }        from './app.routes';


import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AccordionComponent,
    ModalPopupComponent,
    HomeComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule, appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }