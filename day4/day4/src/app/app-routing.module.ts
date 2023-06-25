import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ContentComponent } from './component/content/content.component';
import { DetailsComponent } from './component/details/details.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'home', component: ContentComponent }
  , { path: 'products', component: ProductsComponent }
  , { path: 'product/:id', component: DetailsComponent }
  , { path: 'product/:id/edit', component: AddProductComponent }
  , { path: '**', component: NotFoundError }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
