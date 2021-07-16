import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetalleInterface } from 'src/app/interfaces/producto-detalle.interface';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoDetalle: ProductoDetalleInterface; //atributo para almacenar la respuesta
  id: string; //atributo para almacenar el id
  anio: number = new Date().getFullYear();//obtener año en curso

  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) { } //inyecto ActivatedRoute y ProductosService

  ngOnInit(): void {
    /*obtener parametro de la url usando ActivatedRoute*/
    this.route.params.subscribe(parametro =>{
      /*console.log(parametro);
      console.log(parametro.id);
      console.log(parametro['id']);*/

      //llamo metodo del service y paso el id
      this.productosService.getDetalleProducto(parametro['id']).subscribe((producto: ProductoDetalleInterface)  => {
        //console.log(producto);//mostrar producto
        this.id = parametro['id']; //guardo el id para usarlo en la vista para las imagenes
        this.productoDetalle = producto;
      });
    });
  }
}
