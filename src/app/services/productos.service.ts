import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true; //para el loading de la vista
  productos: ProductoInterface[] = []; //arreglo de productos del tipo de la interfaz

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }

  /*Metodos*/

  private cargarProductos(){ //cargar productos en vista html del home (portafolio)
    //peticion http al indice de productos
    this.http.get('https://app-portafolio-ang-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        //console.log(resp);
        this.productos = resp;
        this.cargando = false;//para el loading de la vista
      });
  }
}
