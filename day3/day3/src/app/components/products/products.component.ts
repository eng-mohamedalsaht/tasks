import { Component } from '@angular/core';
import { Iproduct } from './../Models/iproduct';
import { listOfp } from './../Models/list';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  prods: Iproduct[] = listOfp;


}
