import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
private url= 'http://localhost:3000/connexion';
isConnected = false;
  constructor(private http:HttpClient) { }

  checkData(u: User) {
    return this.http.post(this.url, u);
  }
}
