import { Injectable } from '@angular/core';
import { LignePanier } from '../interfaces/ligne-panier';
import { Livre } from '../interfaces/livre';
import { LivreService } from './livre.service';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private livres: Livre[] = [];
  constructor(private livreServices: LivreService) { 
    this.livreServices.getAllLivres().subscribe((res) => {
      this.livres = res;
    });

  }
  addToCart(isbn) {
    const livre = this.livres.find((elt) => elt.ISBN == isbn);
    const lignePanier: LignePanier = {};
    lignePanier.livre = livre;
    lignePanier.quantite = 1;
    let panier: LignePanier[] = [];
    if (sessionStorage.getItem('panier')) {
      panier = JSON.parse(sessionStorage.getItem('panier'));
    }
    let ligneToBeUpdated = panier.find((elt) => elt.livre.ISBN == isbn);
    if (ligneToBeUpdated) {
      ligneToBeUpdated.quantite++;
    } else {
      panier.push(lignePanier);
    }
    sessionStorage.setItem('panier', JSON.stringify(panier));

  }
}
