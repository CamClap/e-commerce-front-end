import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { ArticleComponent } from './composants/article/article.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { CommandeComponent } from './composants/commande/commande.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { PanierComponent } from './composants/panier/panier.component';
import { LivreComponent } from './composants/livre/livre.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ArticleComponent,
    UtilisateurComponent,
    CommandeComponent,
    AdresseComponent,
    PanierComponent,
    LivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
