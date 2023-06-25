import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  x: any

  constructor(private roter: Router, private activatedrot: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.x = this.activatedrot.snapshot.paramMap.get('id')

  }
  back() {
    this.roter.navigate(['/products'])
  }
}
