import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';
// import { livre } from 'src/app/composants/livre';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  livres = [];
  panier = [];

  constructor(private l: LivreService, private router: Router) { }

  ngOnInit(): void {
    this.remplirPanier();
  }

  remplirPanier() {
    this.panier = JSON.parse(sessionStorage['panier']);

    for (let i = 0; i < this.panier.length; ++i) {
      console.log(this.panier[i]);
    }
    console.log(this.livres);
  }

}
