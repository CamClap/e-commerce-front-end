import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';
import { UtilisateurService } from '../../services/utilisateur.service'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: User = {}
  formUser = this.fb.group({
    nom:[''],
    prenom:[''],
    email:[''],
    mdp:[''],
    adresse: this.fb.group({
      num:[],
      rue:[''],
      cp:[''],
      ville:[''],
      complement:['']
    }),
    adresseLivraison: this.fb.group({
      num:[],
      rue:[''],
      cp:[''],
      ville:[''],
      complement:['']
    })
  })


  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  addUser(){
    console.log(this.formUser.value);
    this.utilisateurService.addPersonne(this.formUser.value).subscribe()
  }

}
