import { Adresse } from './adresse'

export interface User {
    id?: string,
    nom?: string,
    prenom?: string,
    email?: string,
    mdp?: string,
    adresse?: Adresse,
    adresseLivraison?: Adresse
}
