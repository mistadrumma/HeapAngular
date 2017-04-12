import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent implements OnInit {
  move: boolean = false;
  name: string = "vasya"

  moveWrap () {
    this.move = !this.move ;
  }
  ngOnInit(): void {

  }
  title = 'This is my App Man!';
}
