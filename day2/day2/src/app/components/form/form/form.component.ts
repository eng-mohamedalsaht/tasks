import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  valueOfBranch: string = '';
  valueOfTrack: string = '';
  name: string = '';
  age: number = 0;

  flag: boolean = true;

  List: IStudent[] = [];

  message1: string = '';
  message2: string = '';

  display() {
    this.flag = true;

    if (this.name.trim().length == 0) {
      this.message1 = "name is required"
      this.flag = this.flag && false;

    } else if (!this.name.match(/^[a-zA-Z].{3,}$/g)) {
      this.message1 = "invalid name "
      this.flag = this.flag && false;
    } else {
      this.message1 = ''
      this.flag = this.flag && true;
    }

    if (this.age == 0) {
      this.message2 = "age is required "
      this.flag = this.flag && false;
    }
    else if (this.age < 18) {
      this.message2 = "age must be greater than 18 "
      this.flag = this.flag && false;
    } else {
      this.message2 = ''
      this.flag = this.flag && true;
    }

    if (this.valueOfTrack == "Open this select menu") {
      this.message2 = "age is required "
      this.flag = this.flag && false;
    }

    console.log(this.flag)
    if (this.flag) {
      let x: IStudent = {} as IStudent;
      x.Age = this.age;
      x.Name = this.name;
      x.Branch = this.valueOfBranch;
      x.Track = this.valueOfTrack
      this.List.push(x)
    }
  }
  addItem(t: any) {
    this.valueOfBranch = t[1];
    this.valueOfTrack = t[0];
    console.log(this.valueOfBranch)
    console.log(this.valueOfTrack)

  }
}
interface IStudent {
  Name: string,
  Age: Number
  ,
  Track: string,
  Branch: string

}