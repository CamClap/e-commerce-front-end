import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
    user: User = {};
    erreur = '';
    constructor(private auth: AuthentificationService, private router: Router) {}
  
    ngOnInit(): void {}
    connexion() {
      this.auth.checkData(this.user).subscribe((res) => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigateByUrl('/home');
        } else {
          this.erreur = 'Identifiant incorrect';
        }
      });
      
    }
  }