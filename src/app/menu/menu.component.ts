import { Component, OnInit } from '@angular/core';
import { Menu } from '../interface/Menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:Menu[]= new Array;

  constructor(private menu: MenuService) { }
  
  ngOnInit(): void {
    this.menu.getMenu().subscribe(data => {
      this.menuItems= data
    })

  }

}
