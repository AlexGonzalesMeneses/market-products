import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-past-promotions',
  templateUrl: './past-promotions.component.html',
  styleUrls: ['./past-promotions.component.css']
})
export class PastPromotionsComponent implements OnInit {
  public ListaPromotions:any = [];
  public date: Date = new Date();  
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/promotions')
    .subscribe(respuesta =>{
      this.ListaPromotions = respuesta;
      this.ListaPromotions = this.ListaPromotions.filter(
        ( e: { iniDate: string; endDate: string; }) =>( this.compararFechas(e.iniDate,e.endDate))
      );
    })

  }

  compararFechas( iniDate: string, endDate: string ): boolean{
    const desde = new Date(iniDate);
    const hasta = new Date(endDate);
    if((this.date.getTime() >= hasta.getTime())){
      return true;
    }    
    return false;
  }
}
