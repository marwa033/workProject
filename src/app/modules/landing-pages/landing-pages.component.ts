import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradesService } from '../../grades.service';

import * as AOS from 'aos';
@Component({
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.css'],
})
export class LandingPagesComponent implements OnInit, AfterViewInit {
  // start abdo code
  overlayMenuIsOpen: boolean = false;
  animateTiles: boolean = false;
  animateLinks: boolean = false;
  openOverlayMenu() {
    this.overlayMenuIsOpen = true;
    setTimeout(() => {
      this.animateTiles = true;
    }, 1);
    setTimeout(() => {
      this.animateLinks = true;
    }, 400);
  }
  closeOverlayMenu() {
    this.animateTiles = false;
    this.animateLinks = false;
    setTimeout(() => {
      this.overlayMenuIsOpen = false;
    }, 500);
  }
  // @Output('activate')
  // activateEvents: EventEmitter<any>
  // @Output('deactivate')
  // deactivateEvents: EventEmitter<any>
  gradeNavId: number;
  constructor(
    private gradesService: GradesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  // onActivate(){
  //   window.scrollTo(0, 0);
  // }
  ngOnInit() {
    this.gradesService.currentMessage.subscribe((message) => {
      this.gradeNavId = message;
    });
  }
  //
  whiteLogo = true;
  navIsScrolled = false;
  checkPositionOfNAv() {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        this.whiteLogo = false;
        this.navIsScrolled = true;
      } else {
        this.whiteLogo = true;
        this.navIsScrolled = false;
      }
    };
  }
  // end abdo code
  ngAfterViewInit(): void {
    this.checkPositionOfNAv();
  }
  changeFromParent() {
    this.gradesService.changedId(0);
    this.router.navigate([`school`]);
  }
}
