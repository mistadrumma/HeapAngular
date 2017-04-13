import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ContainerComponent } from './container/container.component';
import { MainArticleComponent } from './container/main-article/main-article.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ContainerComponent,
    MainArticleComponent,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
