import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url); // get a la API post 
  }

  public post(url:string, body:any){
    return this.http.post(url,body);
  }
  public delete(url:string, id:string){
    return this.http.delete(`${url}/${id}`);
  }
}
