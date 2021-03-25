import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'vanilla-tilt';
declare var VanillaTilt;
// var Split = require('split.js')
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('container') container: ElementRef<HTMLDivElement>
  leftIsHoverd: Boolean = false;
  rightIsHoverd: Boolean = false;
  leftHover():void{
    this.leftIsHoverd = true
    this.rightIsHoverd = false
  }
  rightHover():void{
    this.rightIsHoverd = true
    this.leftIsHoverd = false
  }

  isWhite = true;
  
  toggleColor() {
    this.isWhite = !this.isWhite;
  }
  constructor(private router: Router) {}

  ngOnInit(): void {

    VanillaTilt.init(document.querySelector('.tilt-image'), {
      max: 10,
      speed: 2000,
    });
    VanillaTilt.init(document.querySelector('.boys-image'), {
      max: 10,
      speed: 2000,
    });
    if (innerWidth < 800) {
      this.isWhite = false;
    } else {
      this.isWhite = true;
    }

    
  }
  boysSec() {
    this.router.navigate([`/school`]);
  }
  girlsSec() {
    this.router.navigate([`/school/girls`]);
  }
}
