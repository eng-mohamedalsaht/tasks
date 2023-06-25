import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { ProductsComponent } from './component/products/products.component';
import { ContentComponent } from './component/content/content.component';
import { DetailsComponent } from './component/details/details.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    ContentComponent,
    DetailsComponent,
    AddProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    ,
    HttpClientModule
    , AppRoutingModule
    , ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
