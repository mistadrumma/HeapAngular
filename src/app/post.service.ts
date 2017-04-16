import { Injectable } from '@angular/core';
import {MainArticle} from "./container/main-article/main-article";

@Injectable()
export class PostService {
  private data:Array<any> = [
    {id: 1, title: 'Инструкция: как перевестипроект Django с SQLite на MySQL без боли', user: 'mistadrumma', category: 'разное', date: "03/05/2017", pretext: 'SQLite3 является СУБД-движком по умолчанию в Python веб-фреймворке Django, а также, как сообщается на официальном сайте проекта, самым часто используемым движком в мире', likes: 12, comments: 6, views: 45, imgUrl: 'assets/img/startup-photos.jpg'},
    {id: 2, title: 'Инструкция: как перевестипроект Django с SQLite на MySQL без боли', user: 'mistadrumma', category: 'разное', date: "03/05/2017", pretext: 'SQLite3 является СУБД-движком по умолчанию в Python веб-фреймворке Django, а также, как сообщается на официальном сайте проекта, самым часто используемым движком в мире', likes: 12, comments: 6, views: 45, imgUrl:'assets/img/article.jpg'}
  ];
  constructor() { }

  getData () {
    return this.data
  }

  getPost (id) {
    return this.data[id - 1];
  }
}

