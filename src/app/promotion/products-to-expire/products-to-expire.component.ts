import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-products-to-expire',
  templateUrl: './products-to-expire.component.html',
  styleUrls: ['./products-to-expire.component.css']
})
export class ProductsToExpireComponent implements OnInit {
  public ListaProducts:any = [];
  public date: Date = new Date(); 
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/products')
    .subscribe(respuesta =>{
      this.ListaProducts = respuesta;
      this.ordenar();
      this.ListaProducts = this.ListaProducts.filter(
        ( e: { vencimiento: string; }) =>( this.compararFechas(e.vencimiento))
        );
    })
  }
  compararFechas( vencimiento: string ): boolean{
    const vence = new Date(vencimiento);
    if((vence.getTime() >= this.date.getTime())){
      return true;
    }    
    return false;
  }

  public ordenar(): void {
    this.ListaProducts.sort((a: { vencimiento: string | number | Date; }, b: { vencimiento: string | number | Date; }) => {
      var dateA = new Date(a.vencimiento).getTime();
      var dateB = new Date(b.vencimiento).getTime();
      return dateA > dateB ? 1 : -1;
    });
  }
}
