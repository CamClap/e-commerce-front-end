import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService} from 'src/app/services/livre.service';
import { Livre } from 'src/app/interfaces/livre';


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
    motsCles: ['']
  });
  
  
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private livreServices : LivreService) {}

  ngOnInit(): void {
    this.livreServices.getAllLivres().subscribe(
      (res) => {
        this.livres = res;
        this.result = this.livres;
      }
    );
  }
  detaile = () => {};
  rechercherLivre() {
    let motsCles = this.rechercheForm.get('motsCles').value;
    this.result = this.livres.filter(livre => livre.titre.toLowerCase().includes(motsCles));
  }
  ajoutPanier() {
    this.livre.ajouterLivre(this.livre).subscribe(res=> {
      ;
    });
    
  }
  ajouterLivre(){
this.livres=[...this.livre];
console.log(this.livres);

  }
  
}
