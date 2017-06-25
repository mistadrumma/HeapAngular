import { Injectable } from '@angular/core';
import {MainArticle} from "./container/main-article/main-article";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  private menuUrl = 'https://heapbackends.herokuapp.com/api/articles/'; // URL to web api

  // headers = new Headers({
  //
  //   'Content-Type': 'application/json',
  // });
  constructor(private http: Http) {

  }

  // extractData(res: Response){
  //   return res.json();
  // }

  getData(): Observable<MainArticle[]> {
    return this.http.get(this.menuUrl).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });
  }


  getPostbyID(id: number): Observable<MainArticle[]> {
    let url = this.menuUrl + id + '/';
    return this.http.get(url).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });
  }
}

