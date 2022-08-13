import { Injectable } from '@angular/core';
import { list } from './module/imges';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _jsonURL = 'assets/data.json';  
  constructor(private http: HttpClient) {
  };

  getPosts(): Observable<list[]>{
    return this.http.get<list[]>(this._jsonURL);
  }
  data_in_use: list = new list;
  data_putchased: list []=[];
  post_index:number=0; 
  save_quantity:number=0;

  customer_name:string='';
}
