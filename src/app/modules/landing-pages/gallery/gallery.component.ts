import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private loader: LoaderService) { }
  fetchData = [
   {image:"http://placeimg.com/350/480/any"},
   {image:"http://placeimg.com/640/480/any"},
   {image:"http://placeimg.com/300/600/any"},
   {image:"http://placeimg.com/640/480/any"},
   {image:"http://placeimg.com/500/250/any"},
   {image:"http://placeimg.com/320/240/any"},
   {image:"http://placeimg.com/480/640/any"},
   {image:"http://placeimg.com/650/480/any"},
   {image:"http://placeimg.com/300/500/any"},
   {image:"http://placeimg.com/520/250/any"},
   {image:"http://placeimg.com/640/480/any"},
   {image:"http://placeimg.com/850/400/any"},
   {image:"http://placeimg.com/350/350/any"},
  ];
  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }

}
