import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

import {Menu} from "./menu";
import {Observable} from "rxjs";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeaderService {
  private menuUrl = 'https://heapbackends.herokuapp.com/menu/';  // URL to web api
  constructor(private http: Http) {

  }

  extractData(res: Response){
    return res.json();
  }

  getMenu() : Observable<Menu[]>{
    return this.http.get(this.menuUrl).map(this.extractData)
  }

  // getMenu(): Promise<Menu[]> {
  //   return this.http.get(this.menuUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Menu[])
  //     .catch(HeaderService.handleError);
  // }
  //
  // private static handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}


