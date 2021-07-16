import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametro => {
      //console.log(parametro['termino']);
      //console.log(parametro);
      this.productosService.buscarProductos(parametro['termino']); //llamo al metodo buscarProductos y le paso el termino a buscar
    });
  }

}
