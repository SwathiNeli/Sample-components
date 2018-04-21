import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouterModule }        from './app.routes';


import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AccordionComponent,
    ModalPopupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }