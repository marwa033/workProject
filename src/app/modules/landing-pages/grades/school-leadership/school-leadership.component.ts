import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-school-leadership',
  templateUrl: './school-leadership.component.html',
  styleUrls: ['./school-leadership.component.css']
})
export class SchoolLeadershipComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  id: any;
  achievement: string;
  name: string;
  title: string;
  major: string;  
  try: string;
  myString = 'Hardik,Paresh,Vimal,Harshad,Kiran';
  myArray = this.myString.split(',');
  constructor(
             private route: ActivatedRoute,
             private router: Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
      if(this.id == 1){
        this.name = 'محسن بن حسن الحارثي';
        this.major = 'لغة عربية 1428 هــ';
        this.title = ' قائد مدرسة طلائع المبدعين الأهلية الابتدائية .';
        this.achievement = 'الحصول على الوسام الماسي علي مستوى محافظة الطائف.'
      }
      else if(this.id == 2){
        this.name = 'محسن بن حسن الحارثي';
        this.major = 'لغة عربية 1428 هــ';
        this.title = ' قائد مدرسة طلائع المبدعين الأهلية المتوسط .';
        this.achievement = 'الحصول على الوسام الماسي علي مستوى محافظة الطائف.'
      }
      else{
        this.name = 'محسن بن حسن الحارثي';
        this.major = 'لغة عربية 1428 هــ';
        this.title = ' قائد مدرسة طلائع المبدعين الأهلية الثانوى .';
        this.achievement = 'الحصول على الوسام الماسي علي مستوى محافظة الطائف.'
      }
    })
    function State(id,val,StateName) {
      this.id = id;
      this.val = val;
      this.StateName = StateName;
    }
    
    function getStates() {
     return [
      new State(1, 1, 'Arizona'),
      new State(2, 1, 'Alaska'),
      new State(3, 1, 'Florida'),
      new State(4, 1, 'Hawaii'),
      new State(5, 2, 'Gujarat'),
      new State(6, 2, 'Goa'),
      new State(7, 2, 'Punjab'),
      new State(8, 3, 'Queensland'),
      new State(9, 3, 'South Australia'),
      new State(10, 3, 'Tasmania'),
      new State(11, 4, 'Penang')
     ];
    }
    this.try = getStates().map(x=>x.StateName).join(",")
    //Simplest Way is as follows
console.log(getStates().map(x=>x.StateName).join(","))
console.log(this.myArray);
  }

}
