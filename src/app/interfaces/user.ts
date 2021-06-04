import { Adresse } from './adresse'

export interface User {
    id?: string,
    nom?: string,
    prenom?: string,
    email?: string,
    motDePasse?: string,
    adresse?: Adresse,
    adresseLivraison?: Adresse
}
