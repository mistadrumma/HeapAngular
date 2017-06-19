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

  constructor(private headerService: HeaderService) {

  }

  // getMenuItem() : void
  // {
  //   this.headerService.getMenu()
  //     .then(body => this.menus = body);
  //
  // }

  initSearch() {
    this.search.emit();
  }
  ngOnInit():void {
    // this.getMenuItem();
    this.headerService.getMenu().subscribe(menus => this.menus = menus);
    console.log(this.menus)

  }

}
