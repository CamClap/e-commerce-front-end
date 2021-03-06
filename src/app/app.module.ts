import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { CommandeComponent } from './composants/commande/commande.component';
import { PanierComponent } from './composants/panier/panier.component';
import { LivreComponent } from './composants/livre/livre.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HomeComponent } from './composants/home/home.component';
import { AdminComponent } from './composants/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    UtilisateurComponent,
    CommandeComponent,
    PanierComponent,
    LivreComponent,
    InscriptionComponent,
    AuthentificationComponent,
    MenuComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
