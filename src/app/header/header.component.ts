import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  constructor() { }

  initSearch() {
    this.search.emit();
  }
  ngOnInit() {
  }

}
