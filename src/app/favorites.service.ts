import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritePokemons : any [] = this.getAllFavorites();

  private numberFavorites = new BehaviorSubject<number>(this.getAllFavorites().length);
  qtdFavoritos$ = this.numberFavorites.asObservable();

  getAllFavorites(){
    return JSON.parse(localStorage.getItem('favoriteListPokemon') || "[]");
  }

  setFavoritePokemon(IPokemon_info : any){
    this.favoritePokemons.push(IPokemon_info);
    localStorage.setItem('favoriteListPokemon', JSON.stringify(this.favoritePokemons));

    const number = this.numberFavorites.getValue();
    this.numberFavorites.next(number + 1)
  }

  deleteFavoritePokemon(pokemonName : string){
    this.favoritePokemons = this.favoritePokemons.filter(pokemon => pokemon.name !== pokemonName);
    localStorage.setItem('favoriteListPokemon', JSON.stringify(this.favoritePokemons))

    const number = this.numberFavorites.getValue();
    this.numberFavorites.next(number - 1)
  }

}
