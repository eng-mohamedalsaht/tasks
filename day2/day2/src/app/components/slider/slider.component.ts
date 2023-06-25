import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images: string[] = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
  i: number = 0;
  url: string = "assets/images/" + this.images[0];

  change() {
    if (this.i == this.images.length)
      this.i = 0;

    this.url = "assets/images/" + this.images[this.i];
    this.i++;



  }

}
