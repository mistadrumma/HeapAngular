import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Menu} from "./menu";

@Injectable()
export class HeaderService {
  private menuUrl = 'https://heapbackends.herokuapp.com/menu/';  // URL to web api
  constructor(private http: Http) {

  }

  getMenu(): Promise<Menu[]> {
    return this.http.get(this.menuUrl)
      .toPromise()
      .then(response => response.json().data as Menu[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

