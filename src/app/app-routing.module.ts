import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './composants/article/article.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { CommandeComponent } from './composants/commande/commande.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { LivreComponent } from './composants/livre/livre.component';
import { PanierComponent } from './composants/panier/panier.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';

const routes: Routes = [
  {path: "inscription", component: InscriptionComponent},
  {path: "article", component: ArticleComponent},
  {path: "commande", component: CommandeComponent},
  {path: "livre", component: LivreComponent},
  {path: "panier", component: PanierComponent},
  {path: "utilisateur", component: UtilisateurComponent},
  {path: "authentification", component: AuthentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
