import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';

const routes: Routes = [
  {path: 'Pokemons', component: PokemonsComponent},
  {path: 'Pokemons/:nome', component: PokemonComponent},
  {path: '', redirectTo: 'Pokemons', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
