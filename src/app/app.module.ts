import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ContainerComponent } from './container/container.component';
import { MainArticleComponent } from './container/main-article/main-article.component';
import { PostDetailComponent } from './container/post-detail/post-detail.component';
import { routing,
  appRoutingProviders }  from './app.routes';
import {HeaderService} from "./header/header.service";
import { ArticleListComponent } from './container/article-list/article-list.component';
import { LoaderComponent } from './shared/loader/loader.component';

import {MomentModule} from "angular2-moment";
import 'moment/locale/ru';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule,
    MomentModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ContainerComponent,
    MainArticleComponent,
    PostDetailComponent,
    ArticleListComponent,
    LoaderComponent,

  ],

  providers: [
    appRoutingProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
