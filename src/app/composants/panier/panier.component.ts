import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/interfaces/Commande';
import { CommandeService } from 'src/app/services/commande.service';
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
  commande: Commande = {};
  user:{}

  constructor(
    private l: LivreService,
    private router: Router,
    private p: PanierService,
    private commandeService: CommandeService
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

  getStockLivres() {
    this.l.getAllLivres().subscribe((res) => {
      this.livres = res;
      console.log(this.livres);
    });
  }

  validerPanier() {
    if (sessionStorage.getItem('panier')) {      
      this.getStockLivres();
      console.log(this.livres);
      this.commande.total = 0;
      this.commande.lignesCommande = [];

      for (let item of this.panier) {
        this.commande.total += (item['livre']['prix'] * item['quantite']);
        this.commande.lignesCommande.push({
          "quantiteCommande": item['quantite'],
          "refArticle": item['livre']['ref']
        });
      }


      this.commande.idUtilisateur = JSON.parse(localStorage['user'])['id'];

      // this.commandeService.addCommande(this.commande).subscribe((res) => {
      //   this.commande = {};
      // });

      // this.viderPanier();

      // alert("Commande validée !");
    } else {
      alert("Remplissez votre panier d'abord !");
    } 
  }

}
