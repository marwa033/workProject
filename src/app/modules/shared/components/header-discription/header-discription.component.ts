import { Component, ElementRef, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-discription',
  templateUrl: './header-discription.component.html',
  styleUrls: ['./header-discription.component.css'],
})
export class HeaderDiscriptionComponent implements OnInit {
  @Input('data') data: {
    img: string;
    primaryTitle: string;
    secondryTitle: string;
    discription: string;
  };
  constructor() {}

  ngOnInit() {}
}
