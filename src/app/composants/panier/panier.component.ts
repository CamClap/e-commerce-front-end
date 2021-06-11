import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/interfaces/Commande';
import { CommandeService } from 'src/app/services/commande.service';
import { LivreService } from 'src/app/services/livre.service';
import { PanierService } from 'src/app/services/panier.service';
import { LivreComponent } from '../livre/livre.component';
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

  validerPanier() {
    if (sessionStorage.getItem('panier')) {
      this.l.getAllLivres().subscribe((res) => {
        this.livres = res;
        let enStock = this.livres.filter(livre => livre.stock > 0);

        this.commande.total = 0;
        this.commande.lignesCommande = [];

        let valide = true;
        let titre = '';

        for (let item of this.panier) {
          for (let i = 0; i < enStock.length; ++i) {

            if (enStock[i].ref == item.livre.ref) {
              i = enStock.length;
            } else if (i == enStock.length - 1) {
              valide = false;
              titre = item.livre.titre;
              break;
            }

          }

          this.commande.total += (item.livre.prix * item.quantite);
          this.commande.lignesCommande.push({
            "quantiteCommande": item.quantite,
            "refArticle": item.livre.ref
          });
        }

        if (valide) {
          this.commande.idUtilisateur = JSON.parse(localStorage['user'])['id'];

          this.commandeService.addCommande(this.commande).subscribe((res) => {
            this.commande = {};
          });

          this.viderPanier();

          alert("Commande validée !");
        } else {
          alert(`L'article "${titre}" n'est plus en stock.`);
        }


      });

    } else {
      alert("Remplissez votre panier d'abord !");
    }
  }

}
