import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  gettodoItems(){
  return this.http.get("http://localhost:3000/items")
  .map(res=>res.json());
  }


addtodoItem(newItem){
  let headers = new Headers();
  headers.append('Content-type','application/json');
  
  return this.http.get("http://localhost:3000/item",newItem)
  .map(res=>res.json());

}

}