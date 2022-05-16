import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../interface/Menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:Menu[]= new Array;

  constructor(private menu: MenuService, private router:Router) { }
  
  ngOnInit(): void {
    this.menu.getMenu().subscribe(data => {
      this.menuItems= data
    })

  }

  redirect(menu:any){
    switch(menu.url){
      case "/clientes":{
        this.router.navigate(["clientes"]);
      }
    }
  }

}
