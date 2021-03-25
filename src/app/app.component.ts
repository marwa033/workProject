import { LoaderService } from './modules/shared/components/loader/loader.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  showLoader: boolean = false;

  constructor(private loader: LoaderService) {}
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
  }

  ngOnInit(): void {
    this.loader.loader$.subscribe((show) => (this.showLoader = show));
  }
}
