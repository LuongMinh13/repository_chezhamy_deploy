import { Component, OnInit } from '@angular/core';
import { MenuServices } from '../service__data/menu__service';
import { IMenu } from './menu__data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private MenuService: MenuServices) { }

  LesMenu: IMenu[] = []

  ngOnInit(): void {
    this.LesMenu = this.MenuService.getMenu();
  }

}
