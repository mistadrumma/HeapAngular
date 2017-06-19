import { Component, OnInit } from '@angular/core';
import {PostService} from "../../post.service";
import {MainArticle} from "./main-article";


@Component({
  selector: 'app-main-article',
  templateUrl: 'main-article.component.html',
  styleUrls: ['main-article.component.less'],
  providers: [PostService]
})
export class MainArticleComponent implements OnInit {
  posts: MainArticle[] = [];


  constructor(private postService: PostService) { }



  ngOnInit() {
    this.posts = this.postService.getData();

  }
}
