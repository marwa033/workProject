import {  Component, OnInit, Pipe  } from '@angular/core';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-all-honor-board',
  templateUrl: './all-honor-board.component.html',
  styleUrls: ['./all-honor-board.component.css']
})

export class AllHonorBoardComponent implements OnInit{

  totalLength:any;
  searchText;
  searchPrimary;
  searchMiddle;
  p: number = 1;
  page2: number = 1;
  page3: number = 1;
  constructor(private loader: LoaderService) { }
  primarySchool = [
     
    {
      image: 'assets/images/honor/honor2.jpg',
      title: 'سعيد بن خالد الشهرانى',
      description:
        'حصل الطالب: سعيد بن خالد الشهرانى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/honor/honor1.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/honor/honor3.jpg',
      title: 'انس بن محمد الثبيتى',
      description:
        'حصل الطالب: انس بن محمد الثبيتى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
    {
      image: 'assets/images/honor/honor4.jpg',
      title: 'سلطان بن حسن الشهرى',
      description:
        'حصل الطالب: سلطان بن حسن الشهرى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/4',
    },
    {
      image: 'assets/images/honor/honor5.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/5',
    },
    {
      image: 'assets/images/honor/honor6.jpg',
      title: 'سعود بن ابراهيم',
      description:
        'حصل الطالب: سعود بن ابراهيم على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/honor/honor7.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/honor/honor8.jpg',
      title: 'محمد بن عبدالله الخالدى',
      description:
        'حصل الطالب: محمد بن عبدالله الخالدى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
  ];

  middleSchool = [

    {
      image: 'assets/images/honor/honor2.jpg',
      title: 'سعيد بن خالد الشهرانى',
      description:
        'حصل الطالب: سعيد بن خالد الشهرانى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/honor/honor1.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/honor/honor3.jpg',
      title: 'انس بن محمد الثبيتى',
      description:
        'حصل الطالب: انس بن محمد الثبيتى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
    {
      image: 'assets/images/honor/honor4.jpg',
      title: 'سلطان بن حسن الشهرى',
      description:
        'حصل الطالب: سلطان بن حسن الشهرى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/4',
    },
    {
      image: 'assets/images/honor/honor5.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/5',
    },
    {
      image: 'assets/images/honor/honor6.jpg',
      title: 'سعود بن ابراهيم',
      description:
        'حصل الطالب: سعود بن ابراهيم على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/honor/honor7.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/honor/honor8.jpg',
      title: 'محمد بن عبدالله الخالدى',
      description:
        'حصل الطالب: محمد بن عبدالله الخالدى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
    {
      image: 'assets/images/honor/honor2.jpg',
      title: 'سعيد بن خالد الشهرانى',
      description:
        'حصل الطالب: سعيد بن خالد الشهرانى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/honor/honor1.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/honor/honor3.jpg',
      title: 'انس بن محمد الثبيتى',
      description:
        'حصل الطالب: انس بن محمد الثبيتى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
    {
      image: 'assets/images/honor/honor4.jpg',
      title: 'سلطان بن حسن الشهرى',
      description:
        'حصل الطالب: سلطان بن حسن الشهرى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/4',
    },
    {
      image: 'assets/images/honor/honor5.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/5',
    },
    {
      image: 'assets/images/honor/honor6.jpg',
      title: 'سعود بن ابراهيم',
      description:
        'حصل الطالب: سعود بن ابراهيم على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/honor/honor7.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/honor/honor8.jpg',
      title: 'محمد بن عبدالله الخالدى',
      description:
        'حصل الطالب: محمد بن عبدالله الخالدى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    }, ];

  highSchool = [
   
    {
      image: 'assets/images/home/gallery2.jpg',
      title: 'سعيد بن خالد الشهرانى',
      description:
        'حصل الطالب: سعيد بن خالد الشهرانى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/home/gallery3.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/home/gallery4.jpg',
      title: 'انس بن محمد الثبيتى',
      description:
        'حصل الطالب: انس بن محمد الثبيتى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
    {
      image: 'assets/images/home/gallery5.jpg',
      title: 'سلطان بن حسن الشهرى',
      description:
        'حصل الطالب: سلطان بن حسن الشهرى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/4',
    },
    {
      image: 'assets/images/home/gallery6.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/5',
    },
    {
      image: 'assets/images/home/gallery7.jpg',
      title: 'سعود بن ابراهيم',
      description:
        'حصل الطالب: سعود بن ابراهيم على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      image: 'assets/images/home/gallery8.jpg',
      title: 'محمد عبدالله العنزي',
      description:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      image: 'assets/images/home/gallery9.jpg',
      title: 'محمد بن عبدالله الخالدى',
      description:
        'حصل الطالب: محمد بن عبدالله الخالدى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
  ];


  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }
}
