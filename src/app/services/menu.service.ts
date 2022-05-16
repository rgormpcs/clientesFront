import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interface/Menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  Url = "http://localhost:8081/app/menu";
  constructor(private http: HttpClient) { }

  
  getMenu() {
    return this.http.get<Menu[]>(this.Url + '/all');
  }
  
}
