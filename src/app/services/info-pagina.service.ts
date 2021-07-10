import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {}; //atributo de tipo interface InfoPaginaInterface
  datosCargados:boolean = false;

  constructor( private http: HttpClient ) {

    //console.log('servicio info-pagina.service.ts cargado');

    //lleer archivo JSON peticion GET
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPaginaInterface) => {

        this.datosCargados = true;
        this.info = resp; //guardo respuesta en el atributo
        console.log(resp);
        //console.log(resp['email']);

    });
  }
}
