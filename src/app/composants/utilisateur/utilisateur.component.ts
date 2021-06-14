import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Adresse } from 'src/app/interfaces/Adresse';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  user: User = {};
  formUser = this.fb.group({
    nom: [''],
    prenom: [''],
    email: [''],
    mdp: [''],
    adresse: this.fb.group({
      num: [],
      rue: [''],
      cp: [''],
      ville: [''],
      complement: [''],
    }),
    adresseLivraison: this.fb.group({
      num: [],
      rue: [''],
      cp: [''],
      ville: [''],
      complement: [''],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private US: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthentificationService
  ) {}

  ngOnInit(): void {
    const connectedUSer = JSON.parse(localStorage.getItem('user'));
    this.formUser.patchValue(connectedUSer);
    
    // this.auth.checkData(this.user).subscribe((res) => {
    //   this.user = JSON.parse(localStorage.getItem('user'));
    // });
  }
  modifierUser() {
    // this.US.editUser(this.user).subscribe((res) => {
    //   this.router.navigateByUrl('/home');
    // });
  }
}
