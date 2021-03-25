import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

 
  constructor(private loader: LoaderService) { }
data;
teamData;
  
  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
    this.data= [
      {
        img: '../../../../../assets/images/neededPaper.jpg',
        primaryTitle: 'الأحياء',
        secondryTitle: 'الأحياء التي يغطيها النقل المدرسي ',
        discription: `
        يغطي النقل المدرسي جميع الأحياء داخل مدينة الطائف 
   يغطي النقل المدرسي الأحياء الموجودة خارج المدينة " السر – الحلقة الشرقية –الحلقة الغربية – الحوية " .
        `,
      }
    ];
    this.teamData=[
      {image:"assets/images/transportation/transportation2.jpg",
       name:"مدير إدارة النقل",
       title:"الأستاذ / محمود ناجي رشاد السرسي"},
       {image:"assets/images/transportation/transportation2.jpg",
        name:"مدير إدارة النقل",
        title:"الأستاذ / محمود ناجي رشاد السرسي"}
    ]
  }

}
