import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../post.service";
import {MainArticle} from "../main-article/main-article";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['post-detail.component.less'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {

  article: any= {} ;
  id: number;
  user: string;
  loading: boolean = false;
  constructor(private activateRoute: ActivatedRoute,
              private postService: PostService
  ){
    this.id = activateRoute.snapshot.params['id'];
  }

  getPostDetail() {
    this.loading = true;
    this.postService.getPostbyID(this.id).subscribe(article => {
      this.article = article;
      this.loading = false;}
      , () => this.loading = false);

  }
  ngOnInit() {
    this.getPostDetail();



  }

}
