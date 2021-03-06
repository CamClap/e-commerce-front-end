import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './composants/admin/admin.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { CommandeComponent } from './composants/commande/commande.component';
import { HomeComponent } from './composants/home/home.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { LivreComponent } from './composants/livre/livre.component';
import { PanierComponent } from './composants/panier/panier.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "inscription", component: InscriptionComponent},
  {path: "commande", component: CommandeComponent, canActivate: [AuthGuard], redirectTo: ""},
  {path: "livre", component: LivreComponent},
  {path: "livre/:isbn", component: LivreComponent},
  {path: "panier", component: PanierComponent},
  {path: "utilisateur", component: UtilisateurComponent},
  {path: "authentification", component: AuthentificationComponent},
  {path: "home", component: HomeComponent},
  {path: "admin", component: AdminComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
