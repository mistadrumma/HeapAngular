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

  article: any  = {};
  id: number;
  user: string;
  constructor(private activateRoute: ActivatedRoute,
              private postService: PostService
  ){
    this.id = activateRoute.snapshot.params['id'];

    this.user = this.article['user'];
    console.log(this.user)

  }



  ngOnInit() {


    this.article  = this.postService.getPost(this.id);


  }

}
