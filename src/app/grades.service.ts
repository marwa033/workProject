import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
   id = new BehaviorSubject(0);
  currentMessage = this.id.asObservable();
  constructor() { }
  changedId(stage:number){
    this.id.next(stage);

  }

}
