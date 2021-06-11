import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  erreur = '';
  totalCommande = 0;
  commandes =[];
  date = new Date();
  meilleurVente = [];
  constructor(private admin: AdministrateurService, private router: Router ) { }

  ngOnInit(): void {
    this.admin.getLast10Commandes().subscribe((res) => {
      if (res) {
        console.log(res);
        this.commandes = [res];
        this.commandes[0].map((i) => {
          this.totalCommande += i.total;
          console.log(this.totalCommande)
        })
      } else {
        this.erreur = 'problème d\'import de commande';
      }
    });

    this.admin.getBestSell().subscribe((res) => {
      if (res) {
        this.meilleurVente = [res];
      } else {
        this.erreur = 'problème d\'import des meilleurs ventes';
      }
    })
  }
}
