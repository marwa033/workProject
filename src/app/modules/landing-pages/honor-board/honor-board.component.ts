import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-honor-board',
  templateUrl: './honor-board.component.html',
  styleUrls: ['./honor-board.component.css']
})
export class HonorBoardComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }
}
