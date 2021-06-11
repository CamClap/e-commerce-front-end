import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';
import { Livre } from 'src/app/interfaces/livre';
import { LignePanier } from 'src/app/interfaces/ligne-panier';
import { PanierService } from 'src/app/services/panier.service';

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
    private livreServices: LivreService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.livreServices.getAllLivres().subscribe((res) => {
      this.livres = res;
      this.result = this.livres.filter(elt => elt.stock != 0);
    });
  }
  detaile = () => {};
  rechercherLivre() {
    let motsCles = this.rechercheForm.get('motsCles').value;
    this.result = this.livres.filter((livre) =>
      livre.titre.toLowerCase().includes(motsCles.toLowerCase())
    );
  }
  ajoutPanier(isbn) {
    this.panierService.addToCart(isbn, 1);
  }
}
