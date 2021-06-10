import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';
import { Livre } from 'src/app/interfaces/livre';
import { LignePanier } from 'src/app/interfaces/ligne-panier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  livres = [];
  result = [];
  livre: any;

  rechercheForm = this.fb.group({
    motsCles: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private livreServices: LivreService
  ) {}

  ngOnInit(): void {
    this.livreServices.getAllLivres().subscribe((res) => {
      this.livres = res;
      this.result = this.livres;
    });
  }
  detaile = () => {};
  rechercherLivre() {
    let motsCles = this.rechercheForm.get('motsCles').value;
    this.result = this.livres.filter((livre) =>
      livre.titre.toLowerCase().includes(motsCles)
    );
  }
  ajoutPanier(isbn) {
    const livre = this.livres.find((elt) => elt.ISBN == isbn);
    const lignePanier: LignePanier = {};
    lignePanier.livre = livre;
    lignePanier.quantite = 1;
    let panier: LignePanier[] = [];
    if (sessionStorage.getItem('panier')) {
      panier = JSON.parse(sessionStorage.getItem('panier'));
    }
    if (livre == lignePanier.livre) {
      lignePanier.quantite ++
        
      
    }
    panier.push(lignePanier);
    sessionStorage.setItem('panier', JSON.stringify(panier));
  }
}
