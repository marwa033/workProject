import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loader$: Subject<boolean> = new Subject();

  constructor() {
    this.loader$.next(false);
  }

  showLoader() {
    this.loader$.next(true);
  }

  hideLoader() {
    this.loader$.next(false);
  }
}
