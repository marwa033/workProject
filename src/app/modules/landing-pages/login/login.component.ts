import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  ngOnInit(): void {  
       
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }

}
