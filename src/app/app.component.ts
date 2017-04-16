import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.less']
})
export class AppComponent implements OnInit {
  move: boolean = false;

  moveWrap () {
    this.move = !this.move ;
  }
  ngOnInit(): void {

  }

}
