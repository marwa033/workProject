import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService } from '../../shared/components/loader/loader.service';
const dummyData = [
  {
    img: '../../../../../assets/images/admission/admission1.jpg',
    primaryTitle: 'الأوراق المطلوبة',
    secondryTitle: 'الأوراق المطلوبة',
    discription: `صورة من بطاقة الأحوال المدنية .
    صورة من شهادة ميلاد التلميذ .
    صورة من بطاقة الأحوال المدنية .
    عدد ( 6 ) صور شمسية للتلميذ ملونة مقاس ( 3 ×4 ) تكون بالزي الرسمي (شماغ وعقال ).
    صورة الإقامة سارية المفعول لغير السعوديين ورقم الحاسب للتلميذ من الجوازات .
    عدد ( 6 ) صور شمسية للتلميذ ملونة مقاس ( 3 ×4 ) تكون بالزي الرسمي (شماغ وعقال ).
    `,
  },
  {
    img: '../../../../../assets/images/admission/admission2.jpg',
    primaryTitle: 'الاسبوع التمهيدي',
    secondryTitle: 'الأسبوع التمهيدي يبدأ من الأحد إلى الخميس',
    discription: `يبدأ الدوام للعام الدراسي الجديد إن شاء الله ـــ عز وجل ـــ يوم الاثنين الموافق 22/12/1439هـ، ولا يحضر التلميذ قبل هذا اليوم .
    يحضر التلميذ فـي الأيام الخمسه الأولى بملابسه الرياضية ( بنطلون أبيض + قميص أخضر ) .
    من اليوم الأول عليكم بقص أظافر الطفل والحلاقة له حلاقة عادية وممنوع حلاقة القزع و التقيد بأنظمة المدرسة مع مرافقة ولي أمره .
    لا يحضر التلميذ الحقيبة إلا فـي يوم الخميس ـــ أي فـي نهاية الأسبوع التمهيدي.`,
  },
  {
    img: '../../../../../assets/images/admission/admission3.jpg',
    primaryTitle: 'ملحوظات هامة',
    secondryTitle: 'ملحوظات هامة',
    discription: `على أولياء الأمور المشتركين فـي حافلات المدرسة توصيل أبنائهم طيلة الأسبوع التمهيدي ذهابًا وإيابًا والحضور معهم لتشجيعهم.
    لن يتم تحويل الطالب للوحدة الصحية إلا بعد تسديد الدفعة الأولى من الرسوم ؛ ليتم اعتماد تسجيل ابنكم ضمن تلاميذ المدرسة لعام الدراسي 1439 / 1440هـ .
    لن يتم قبول الطالب في برنامج نور إلا بعد إكمال الملف الورقي .
    يبدأ برنامج الأسبوع التمهيدي يوميا الساعة 7.30 صباحًا .`,
  },
];

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css'],
})
export class AdmissionsComponent implements OnInit {
  @Output('data') data: {
    img: string;
    primaryTitle: string;
    secondryTitle: string;
    discription: string;
  }[] = dummyData;
  constructor(private router: Router,private loader: LoaderService) {}

  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }
}
