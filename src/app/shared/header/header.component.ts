import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  //buscar productos (busqueda del header)
  buscarProducto(termino:string){
    if(termino.length < 1){
      return;//si no escribo nada no hace la busqueda
    }
    this.router.navigate(['/search',termino])//redirijo a search y paso el termino como parametro en la ruta
  }

}
