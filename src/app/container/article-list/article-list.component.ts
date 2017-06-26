import { Component, OnInit } from '@angular/core';
import {PostService} from "../../post.service";
import {MainArticle} from "../main-article/main-article";

@Component({
  selector: 'app-article-list',
  templateUrl: 'article-list.component.html',
  styleUrls: ['article-list.component.less'],
  providers: [PostService]
})
export class ArticleListComponent implements OnInit {
  posts: MainArticle[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getData().subscribe(posts => this.posts = posts);
  }

}
