import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  defualtBgCover: string =
    '../../../../../assets/images/page-custom-header.jpg';
  @Input('title') title: string;
  @Input('responsableImg') responsableImg: string;
  @Input('responsableName') responsableName: string;
  @Input('responsableMobile') responsableMobile: string;
  @Input('position') position: string;
  @Input('coverImage') coverImage: string = this.defualtBgCover;

  isOpenedHint: boolean = false;
  toggleHint() {
    this.isOpenedHint = !this.isOpenedHint;
  }

  isCopied: boolean = false;
  copyPhoneNumber(e: MouseEvent) {
    let text = (e.target as HTMLButtonElement).textContent;
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }

  constructor() {}

  ngOnInit() {  
  }
}
