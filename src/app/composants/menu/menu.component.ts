import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private panierService: PanierService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  ngOnChanges(): void {
    this.nbItems = this.panierService.getNbItems();
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  togglemenu = () =>{
    this.showMenu = !this.showMenu
  }
  deconnexion = () => {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/authentification')
  }

}
