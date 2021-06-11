import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Commande } from '../interfaces/commande';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url = 'http://localhost:3000/commande/';
  
  constructor(private http: HttpClient) { }

  addCommande(com: Commande) {
    return this.http.post<Commande>(this.url, com);
  }}
