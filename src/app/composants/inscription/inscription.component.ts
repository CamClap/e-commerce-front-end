import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: User = {}

  constructor() { }

  ngOnInit(): void {
  }
  creerCompte(){
    this.user = {...this.user};
    this.user = {};
    console.log(this.user);
  
    
  }

}
