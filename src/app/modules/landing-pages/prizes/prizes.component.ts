import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {
  data;
  constructor(private loader: LoaderService) { }
  fetchData = [
    {"imge":"assets/images/prizes/1.jpg" ,"description":"حصول مؤسس المدارس الأستاذ عوض بن عواض الزائدي على وسام المعلم المتميز في عام 1419 هــ"},
    {"imge":"assets/images/prizes/2.JPG","description":"حصول المدرسة على المركز الثاني  على مستوى المملكة العربية السعودية للعام الدراسي 1432 هـ "},
    {"imge":"assets/images/prizes/3.jpg","description":"حصول مدير المدرسة على المركز الثانى مستوى المملكة العربية السعودية للعام الدراسي 1432هـ "},
    {"imge":"assets/images/prizes/4.JPG","description":"حصول المدرسة على درع التميز في جائزة منطقة مكة المكرمة للأداء التعليمي المتميز فئة المدرسة المتميزة في دورتها الثانية للعام الدراسي 1432 هـ "},
    {"imge":"assets/images/prizes/6.JPG","description":"حصول مدير المدرسة على درع التميز في جائزة منطقة مكة المكرمة للأداء التعليمي المتميز فئة المدير المتميز في دورتها الأولى للعام الدراسي 1432 هـ "},
  ];
  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
    this.data= [
      {
        img: 'assets/images/prize1.png',
        primaryTitle: null,
        secondryTitle: 'تعريف العلاقات العامة بمدارس طلائع المبدعين الأهلية ',
        discription: `
        حصول مؤسس المدارس الأستاذ عوض بن عواض الزائدي على وسام المعلم المتميز في عام 1419 هــ
        `,
      },
      {
        img: 'assets/images/prize2.png',
        primaryTitle: null,
        secondryTitle: 'مهام ووظائف العلاقات العامة في مدارس طلائع المبدعين الأهلية ',
        discription: `
        حصول المدرسة على المركز الثاني  على مستوى المملكة العربية السعودية للعام الدراسي 1432 هـ
        `,
      },
      {
        img: 'assets/images/prize3',
        primaryTitle: null,
        secondryTitle: 'تعريف العلاقات العامة بمدارس طلائع المبدعين الأهلية ',
        discription: `حصول مؤسس المدارس الأستاذ عوض بن عواض الزائدي على وسام المعلم المتميز في عام 1419 هــ
        `,
      },
      {
        img: 'assets/images/prize4.png',
        primaryTitle: null,
        secondryTitle: null,
        discription: `
        حصول المدرسة على المركز الثاني  على مستوى المملكة العربية السعودية للعام الدراسي 1432 هـ
        `,
      }
    ];
  }

}
