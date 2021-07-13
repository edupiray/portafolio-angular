import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {}; //atributo de tipo interface InfoPaginaInterface
  datosCargados:boolean = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();

    this.cargarEquipo();


  }

  /*metodos*/
  private cargarInfo(){ //leer archivo JSON peticion GET
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPaginaInterface) => {

        this.datosCargados = true;
        this.info = resp; //guardo respuesta en el atributo
        console.log(resp);
        //console.log(resp['email']);
      });
  }

  private cargarEquipo(){ //cargar equipo peticion HTTP GET
   this.http.get('https://app-portafolio-ang-default-rtdb.firebaseio.com/equipo.json')
     .subscribe( (resp: any[]) => {
       this.equipo = resp;//guardo respuesta en el atributo
       //console.log(resp);
     });
 }


}
