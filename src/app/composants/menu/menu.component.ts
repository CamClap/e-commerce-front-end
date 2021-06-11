import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nbItems = 0;
  showMenu = false;
  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    this.nbItems = this.panierService.getNbItems(); 
  }
  togglemenu = () =>{
    this.showMenu = !this.showMenu
  }

}
