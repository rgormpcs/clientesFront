
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interface/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  Url = "http://localhost:8081/app/cliente";
  constructor(private http: HttpClient) { }

  
  getClientes() {
    return this.http.get<Cliente[]>(this.Url + '/all');
  }
  
}
