import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-girls-section',
  templateUrl: './girls-section.component.html',
  styleUrls: ['./girls-section.component.css']
})
export class GirlsSectionComponent implements OnInit {

  constructor(private loader: LoaderService) { }


  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }
}
