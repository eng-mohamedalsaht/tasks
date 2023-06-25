import { Output, EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})


export class SelectComponent {
  select: string = 'Open this select menu'
  selectBranch: string = ''
  arr: string[] = [];
  tracks: string[] = ["frontend", "mearn", "Embeded", "Testing", "DotNet"]
  @Output() newItemEvent = new EventEmitter<string[]>();
  @Input() message1 = '';
  @Input() message2 = '';



  display() {

    // console.log(this.select)
    switch (this.select) {
      case "frontend":
        this.arr = ['banha', 'smart', 'meofia']
        break;
      case "Embeded":
        this.arr = ['mansoura', 'cairo']
        break;

      case "Embeded":
        this.arr = ['cairo']
        break;
      case "Testing":
        this.arr = ['not opened this year']

        break;
      case "DotNet":
        this.arr = ['mansoura', 'meofia']

        break;
    }
  }

  displayBrach() {
    this.newItemEvent.emit([this.select, this.selectBranch]);

    // console.log(this.newItemEvent)
  }


}
