import { Component, OnInit } from '@angular/core';
import { MAIN_PAGE_MENU_ITEMS } from './main-page-menu';

@Component({
  selector: 'ngx-home',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  menu = MAIN_PAGE_MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
