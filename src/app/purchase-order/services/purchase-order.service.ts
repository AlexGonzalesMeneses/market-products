import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IPurchaseOrder } from '../interfaces/purchase-order.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  public baseURL:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getPurchaseOrderCompleted():Observable<IPurchaseOrder[]>{
    return this.http.get<IPurchaseOrder[]>(`${this.baseURL}/purchase-order`).pipe(
      map(resp => {
        return resp.filter(ev => ev.stateOrder === 'FIN') as IPurchaseOrder[];
      })
    );
  }
  getPurchaseOrderUnfinished():Observable<IPurchaseOrder[]>{
    return this.http.get<IPurchaseOrder[]>(`${this.baseURL}/purchase-order`).pipe(
      map(resp => {
        return resp.filter(ev => ev.stateOrder !== 'FIN') as IPurchaseOrder[];
      })
    );
  }
  createOrder(order:any):Observable<any>{
    return this.http.post(`${this.baseURL}/purchase-order`,order);
  }
}
