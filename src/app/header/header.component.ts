import {Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {Menu} from "./menu";
import {HeaderService} from "./header.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.less'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit, AfterViewInit{

  @Output() search: EventEmitter<any> = new EventEmitter();
  @ViewChild('brand') brand: ElementRef;
  menus: Menu[] =[];


  constructor(private headerService: HeaderService,

  ){

  }


  initSearch() {
    this.search.emit();
  }


  ngOnInit():void {
    // this.getMenuItem();
    this.headerService.getMenu().subscribe(menus => this.menus = menus);

  }

  ngAfterViewInit(): void {
    console.log(this.brand.nativeElement.textContent)
  }

}
