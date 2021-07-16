import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true; //para el loading de la vista
  productos: ProductoInterface[] = []; //arreglo de productos del tipo de la interfaz
  productosFiltrados: ProductoInterface[] = []; //atributo para guardar los productos obtenidos de la busqueda

  constructor( private http: HttpClient ) {

    this.cargarProductos(); //llamo al metodo

  }

  /*Metodos*/

  private cargarProductos(){ //cargar productos en vista html del home (portafolio)

    return new Promise((resolve, reject) => {
      //peticion http al indice de productos
      this.http.get('https://app-portafolio-ang-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: ProductoInterface[]) => {
          this.productos = resp;
          this.cargando = false;//para el loading de la vista
          resolve(); //indico que la promesa termino con éxito
        });
    });
  }

  getDetalleProducto(id: string){ //obtener detalle del producto peticion GET
    return this.http.get(`https://app-portafolio-ang-default-rtdb.firebaseio.com/productos/${id}.json`); //retorno un Observable de la respuesta con el objeto JSON
  }

  buscarProductos(termino: string){ //busco y filtro los productos segun el termino buscado

    if(this.productos.length === 0){
      //debo esperar que se carguen los productos
      this.cargarProductos().then(() =>{
        //ejecutar despues de tener los productos cargados
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    } else{
      //ya se cargaron productos puedo hacer la busqueda/filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string){

    this.productosFiltrados = [];//limpio el arreglo para que si vuelvo a dar enter no vuelva a buscar y cargue nuevamente el arreglo con los mismo elementos (repite)

    termino = termino.toLowerCase();//paso a minuscula lo que busque el cliente

    this.productos.forEach(producto => {

      const tituloMinuscula = producto.titulo.toLowerCase();//paso el titulo a minucula para comparar bien
      const categoriaMinuscula = producto.categoria.toLowerCase();//paso la categoria a minucula para comparar bien

      if(categoriaMinuscula.indexOf(termino) >= 0 || tituloMinuscula.indexOf(termino) >= 0){ //si el termino coindice en alguna parte con la categoria o el titulo
        this.productosFiltrados.push(producto); //agregar el producto al arreglo de productos filtrados
      }
    });
  }
}
