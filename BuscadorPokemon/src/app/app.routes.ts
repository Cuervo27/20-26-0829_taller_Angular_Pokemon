import { Routes} from "@angular/router";
import { RegistroUsuarioComponent } from './componets/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponents } from './componets/buscador-pokemon/buscador-pokemon.component';

export const routes: Routes = [
    { path: 'registro', component: RegistroUsuarioComponent },
    { path: 'buscador', component: BuscadorPokemonComponent},
    { path: '', redirectTo: '/buscador', pathMatch: 'full'}
]
