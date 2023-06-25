import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productid: any;
  product: any;
  constructor(private roter: Router, private activatedrot: ActivatedRoute, private service: ProductService) {


  }

  ngOnInit(): void {

    this.productid = this.activatedrot.snapshot.paramMap.get('id')
    if (this.productid != 0) {


      this.service.getproduct(this.productid).subscribe(resp => {
        this.product = resp
        this.pname.setValue(this.product.productName)
        this.pprice.setValue(this.product.price)
        this.pquantity.setValue(this.product.quantity)
      })
    }
  }
  pform = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl("", [Validators.required, Validators.min(10)]),
    quantity: new FormControl("", [Validators.required, Validators.min(10)])


  });

  get pname() {
    return this.pform.controls.productName;
  }

  get pprice() {
    return this.pform.controls.price;
  }

  get pquantity() {
    return this.pform.controls.quantity;
  }
  oper(e: any) {
    e.preventDefault();
    if (this.pform.status == 'VALID') {
      if (this.productid == 0) {
        this.service.addproduct(this.pform.value).subscribe(() => {
        })
      } else {
        this.service.editproduct(this.productid, this.pform.value).subscribe(() => {

        })
      }
      this.roter.navigate(['/products'])

    }

  }
}
