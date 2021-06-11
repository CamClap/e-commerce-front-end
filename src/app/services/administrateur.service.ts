import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {
  private url= 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  getLast10Commandes(){
    return this.http.get(this.url+"commande");
  }
  getBestSell(){
    return this.http.get(this.url+"admin");
  }
}
