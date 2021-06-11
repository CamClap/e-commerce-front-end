import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../interfaces/user'
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = 'http://localhost:3000/utilisateur'

  constructor( private http: HttpClient) { }

  addPersonne(p: User) {
    return this.http.post<User>(this.url, p);
  }
}
