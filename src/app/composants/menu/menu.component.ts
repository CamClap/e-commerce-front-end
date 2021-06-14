import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nbItems = 0;
  showMenu = false;
  user= {};
  isConnected = false;
  
  constructor(private panierService: PanierService, private router: Router, private auth: AuthentificationService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this. isConnected = this.auth.isConnected;
    console.log(this.isConnected)
    if(this.user){
      this.isConnected = true;
      console.log(this.isConnected)
    }
  }
  ngOnChanges(): void {
    this.nbItems = this.panierService.getNbItems();
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  togglemenu = () =>{
    this.showMenu = !this.showMenu
  }
  deconnexion = () => {
    if(this.user){
      localStorage.removeItem('user');
      this.router.navigateByUrl('/home');
      this.togglemenu();
    }
  }

}
