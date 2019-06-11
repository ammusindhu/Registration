import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/student.json';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  studentresult: any = data.default;
  users: any;
  mark: number;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.studentresult.length; i++) {
      var marks = this.studentresult[i].marks;
      this.studentresult[i].name = this.studentresult[i].name.charAt(0).toUpperCase() + this.studentresult[i].name.slice(1).toLowerCase();
      var eng = Number(marks["English"]);
      var Math = Number(marks["Maths"]);
      var Scie = Number(marks["Science"]);
      this.mark = eng + Math + Scie;
      if (eng < 20 || Math < 20 || Scie < 20) {
        this.studentresult[i].status = "FAIL";
      } else {
        this.studentresult[i].status = "PASS";
      }
      this.studentresult[i].marks = this.mark;
    }
    this.studentresult.sort(function (a, b) {
      var x = a.name;
      var y = b.name;
      return x < y ? -1 : x > y ? 1 : 0;
    });
    var arrymarks = this.studentresult.map((val) => val.marks)
    var maxmar = arrymarks.reduce((a, b) => a > b ? a : b);
    this.studentresult.forEach(element => {
      if (element.marks === maxmar) {
        element.status = "TOPPER";
      }
    });



  }
}


