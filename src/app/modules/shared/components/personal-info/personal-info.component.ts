import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.css'],
  })
  export class PersonalInfoComponent implements OnInit {
    @Input('data') data: {
      image: string;
      name: string;
      title: string;
      description: string;
    }
    constructor() {}
  
    ngOnInit() {}
  }