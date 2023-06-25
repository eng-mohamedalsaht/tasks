import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/iproduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prods: any = []
  constructor(private service: ProductService) {

  }
  ngOnInit(): void {
    this.service.getallproducts().subscribe((resp) => {
      this.prods = resp
    })
  }
  delet(id: any) {
    // confirm("hhhhhhhh")
    this.service.deletproduct(id).subscribe((resp) => {
      this.prods = this.prods.filter((product: any) => product.id != id)

    })
  }
}
