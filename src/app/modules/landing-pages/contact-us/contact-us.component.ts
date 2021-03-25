import {Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  
  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }
}
