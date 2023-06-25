import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { Card2Component } from './cards/card2/card2.component';
import { FooterComponent } from './footer/footer.component';
import { Card3Component } from './cards/card3/card3.component';
import { FormComponent } from './form/form.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CardsComponent,
    CardComponent,
    Card2Component,
    FooterComponent,
    Card3Component,
    FormComponent
  ],
  imports: [BrowserModule
  ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
