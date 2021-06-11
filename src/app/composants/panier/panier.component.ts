import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';
import { PanierService } from 'src/app/services/panier.service';
// import { livre } from 'src/app/composants/livre';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  livres = [];
  panier = [];

  constructor(
    private l: LivreService,
    private router: Router,
    private p: PanierService
  ) { }

  ngOnInit(): void {
    this.remplirPanier();
  }

  remplirPanier() {
    if (sessionStorage.getItem('panier')) {
      this.panier = JSON.parse(sessionStorage['panier']);
    }
    else {
      this.panier = [];
    }
  }

  viderPanier() {
    sessionStorage.removeItem('panier');
    this.remplirPanier();
  }

  moinsQuantitePanier(index) {
    if (this.panier[index]['quantite'] == 1) {
      this.p.removeFromCart(this.panier[index]['livre']['ISBN']);
    }
    else {
      this.p.addToCart(this.panier[index]['livre']['ISBN'], -1);
    }
    this.remplirPanier();
  }

  plusQuantitePanier(index) {
    this.p.addToCart(this.panier[index]['livre']['ISBN'], 1);
    this.remplirPanier();
  }

  validerPanier() {

  }

}
