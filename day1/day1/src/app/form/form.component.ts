import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  nametemp: string = '';
  agetemp: string = '';

  nameval: string = '';
  ageval: number = 0;

  flag: boolean = true;
  List: string[] = [];



  namev(e: any) {
    this.nametemp = e.target.value;
    // console.log(this.nametemp)
    if (isFinite(parseInt(this.nametemp))) {
      this.nametemp = "name must be string";
      this.flag = false;
    } else if (this.nametemp.trim().length < 3) {
      this.nametemp = "name length must be greater than 3";
      this.flag = false;
    } else {
      this.nameval = this.nametemp;
      this.nametemp = ''
      e.target.val = ''

    }


  }
  agev(e: any) {
    this.agetemp = e.target.value;
    // console.log(this.agetemp)
    if (isNaN(parseInt(this.agetemp))) {
      this.agetemp = "age required";
      this.flag = false;
    } else if (parseInt(this.agetemp) < 18) {
      this.agetemp = "age must be greater than 18";
      this.flag = false;
    }
    else {
      this.ageval = parseInt(this.agetemp);
      this.agetemp = ''
      e.target.val = ''
    }

  }
  vlidate() {
    this.namev(null);
    this.agev(null);
    if (this.flag) {
      this.List.push(`age${this.ageval} : name${this.nameval}`)

    }
  }
}
