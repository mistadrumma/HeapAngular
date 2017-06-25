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
  private menuUrl = 'https://heapbackends.herokuapp.com/api/menu/';  // URL to web api
  constructor(private http: Http) {

  }

  static extractData(res: Response){
    return res.json();
  }

  getMenu() : Observable<Menu[]>{
    return this.http.get(this.menuUrl).map(HeaderService.extractData)
  }


}


