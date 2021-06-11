import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/interfaces/Commande';
import { User } from 'src/app/interfaces/User';
import { Livre } from 'src/app/interfaces/livre';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
})
export class CommandeComponent implements OnInit {
  commande: Commande = {};
  user: User = {};
  livre: Livre = {};
  livres: Livre[] = [];

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {}

  validerCommande() {
    this.commandeService.addCommande(this.commande).subscribe((res) => {
      this.commande = {};
    });
  }

  quantiteVoulue() {}

  prixTotal() {}
}
