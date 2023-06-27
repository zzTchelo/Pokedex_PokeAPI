import { Injectable } from '@angular/core';
import { IPokemon_info } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritePokemons : any [] = [];

  getFavoritePokemonByID(){
  }

  updateFavoritePokemon(){
  }

  getAllFavorites() : Observable<any>{
    return JSON.parse(localStorage.getItem('favoriteListPokemon') || "[]");
  }

  setFavoritePokemon(IPokemon_info : any){
    this.favoritePokemons.push(IPokemon_info);
    localStorage.setItem('favoriteListPokemon', JSON.stringify(this.favoritePokemons));
  }

  deleteFavoritePokemon(pokemonID : number){
    this.favoritePokemons = this.favoritePokemons.filter(pokemon => pokemon.id !== pokemonID);
    localStorage.setItem('favoriteListPokemon', JSON.stringify(this.favoritePokemons))
  }

}
