import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContentComponent } from './components/content/content.component';
import { DetailsComponent } from './components/details/details.component';
import { ProdcardComponent } from './components/prodcard/prodcard.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  { path: '', component: ContentComponent }
  , { path: 'home', component: ContentComponent }
  , { path: 'products', component: ProductsComponent }
  , { path: 'productss', component: ProdcardComponent }
  , { path: 'product/:id', component: DetailsComponent }
  , { path: 'product/:id/edit', component: AddproductComponent }
  , { path: '**', component: NotFoundError }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { ProdcardComponent } from './components/prodcard/prodcard.component';
  exports: [RouterModule]
})
export class AppRoutingModule { }
