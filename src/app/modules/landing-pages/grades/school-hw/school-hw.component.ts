import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-hw',
  templateUrl: './school-hw.component.html',
  styleUrls: ['./school-hw.component.css']
})
export class SchoolHWComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toHw(){
    // this.router.navigate([`/grades/home` + '/3']);
  }
}
