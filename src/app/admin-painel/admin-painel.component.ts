import { Component, OnInit } from '@angular/core';
import { ADMIN_PAINEL_MENU_ITEMS } from './admin-painel-menu';

@Component({
  selector: 'ngx-admin-painel',
  templateUrl: './admin-painel.component.html',
  styleUrls: ['./admin-painel.component.scss'],
})
export class AdminPainelComponent implements OnInit {
  menu = ADMIN_PAINEL_MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
