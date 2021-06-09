import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  motDePasse=[];
  email=[]
  user: User = {};

  constructor() { }

  ngOnInit(): void {
  }
connexion(){

}
}
