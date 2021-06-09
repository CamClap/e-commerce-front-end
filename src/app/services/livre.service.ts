import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livre } from '../interfaces/livre'

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private url = 'http://localhost:3000/article/';
 
  constructor(private http: HttpClient) { }
  getAllLivres() {
    return this.http.get<Array<Livre>>(this.url);
  }
  
  getOneByref(isbn: number) {
    return this.http.get<Livre>(this.url+isbn)
  }

}
