import { Component } from '@angular/core';
import { Iproduct } from './../Models/iproduct';
import { listOfp } from './../Models/list';

@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.css']
})
export class ProdcardComponent {
  prods: Iproduct[] = listOfp;

}
