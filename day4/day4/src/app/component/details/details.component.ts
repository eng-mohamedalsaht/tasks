import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  x: any
  y: any
  constructor(private roter: Router, private activatedrot: ActivatedRoute, private service: ProductService) {

  }
  ngOnInit(): void {

    this.y = this.activatedrot.snapshot.paramMap.get('id')
    this.service.getproduct(this.y).subscribe(resp => {
      this.x = resp
    })
  }
  back() {
    this.roter.navigate(['/products'])
  }
}
