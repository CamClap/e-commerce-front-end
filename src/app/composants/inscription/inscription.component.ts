import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UtilisateurService } from '../../services/utilisateur.service'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  user: User = {}
  formUser = this.fb.group({
    nom:['Frontino '],
    prenom:['Allard'],
    email:['test3@test.com'],
    mdp:['1234'],
    adresse: this.fb.group({
      num:[14],
      rue:['rue Marie de Médecis'],
      cp:['64200'],
      ville:['Biarritz'],
      complement:['']
    }),
    adresseLivraison: this.fb.group({
      num:[28],
      rue:['Avenue de la République'],
      cp:['84000'],
      ville:['Avignon'],
      complement:['']
    })
  })


  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder, private router: Router, private auth: AuthentificationService) { }

  ngOnInit(): void {
  }
  
  addUser(){
    console.log(this.formUser.value);
    this.utilisateurService.addPersonne(this.formUser.value).subscribe();
    this.router.navigateByUrl('/home');
  }
  
}
