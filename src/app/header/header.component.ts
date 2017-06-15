import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Menu} from "./menu";
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.less'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();

  menu: Menu[] = [];
  private errorMessage;
  constructor(private headerService: HeaderService) {

  }

  getMenuItem()
  {
    this.headerService.getMenu()
      .then(
        data => this.menu = data,
        error =>  this.errorMessage = <any>error
      );
  }

  initSearch() {
    this.search.emit();
  }
  ngOnInit() {
console.log(this.getMenuItem());

  }

}
