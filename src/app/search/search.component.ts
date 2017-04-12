import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.less']
})
export class SearchComponent implements OnInit {
  initForm: boolean;
  @Input() move: boolean;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() {

  }
  @Input()
  tooggleMove () {
    this.move = ! this.move;
    this.close.emit()
  }
  ngOnInit() {
    console.log(this.move)
  }

}
