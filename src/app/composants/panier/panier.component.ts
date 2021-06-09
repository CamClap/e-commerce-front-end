import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';
// import { livre } from 'src/app/composants/livre';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  livres ={}
 

  constructor(private l: LivreService, private router: Router) { }

  ngOnInit(): void {
  }

}
