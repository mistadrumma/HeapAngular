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

  menus: Menu[] =[];
  private errorMessage;
  constructor(private headerService: HeaderService) {

  }

  getMenuItem() : void
  {
    this.headerService.getMenu()
      .then(body => this.menus = body);

  }

  initSearch() {
    this.search.emit();
  }
  ngOnInit():void {
    this.getMenuItem();
    console.log(this.menus)

  }

}
