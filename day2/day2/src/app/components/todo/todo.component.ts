import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  list: string[] = []
  value: string = ""
  Add() {
    if (this.value.trim().length != 0) {
      this.list.push(this.value);
      this.value = ""
    }

  }
  Delet(z: number) {
    this.list = this.list.filter((item, index) => index != z)
  }
}
