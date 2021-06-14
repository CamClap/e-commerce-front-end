import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  quantite = 1;

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
  ajoutPanier(isbn, quantite) {
    this.panierService.addToCart(isbn, quantite);
    this.quantite = 1
  }

  plusQuantite() {
    this.quantite++;
  }
  moinsQuantite() {
    if (this.quantite != 1) this.quantite--;
  }
}
