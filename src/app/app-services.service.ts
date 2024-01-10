import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Details} from './details'

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  public temp:Details[] = [];
  public flag:boolean = false;
  public htmlcode:string = '';

  private myBehaviorSubject = new Subject<Details[]>();

  constructor() { }

  setValue(value: Details[]) {
    this.myBehaviorSubject.next(value);
  }

  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
