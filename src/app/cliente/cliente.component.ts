import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interface/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes:Cliente[]= new Array;
  constructor(private cliente: ClienteService) { }

  ngOnInit(): void {
    

    this.cliente.getClientes().subscribe(data => {
      this.clientes= data
    })
  }

}
