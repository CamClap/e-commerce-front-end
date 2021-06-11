import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'protractor';
import { LignePanier } from 'src/app/interfaces/ligne-panier';
import { Livre } from 'src/app/interfaces/livre';
import { LivreService } from 'src/app/services/livre.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css'],
})
export class LivreComponent implements OnInit {
  isbn = 0;
  livre: Livre = {};
  quantite = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreService: LivreService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.isbn = +value.get('isbn');
    });
    this.livreService.getOneByref(this.isbn).subscribe((res) => {
      this.livre = res;
    });
  }
  ajoutPanier(isbn) {
    this.panierService.addToCart(isbn);
  }

  plusQuantite() {
    this.quantite++;
  }
  moinsQuantite() {
    if (this.quantite != 0) this.quantite--;
  }
}
