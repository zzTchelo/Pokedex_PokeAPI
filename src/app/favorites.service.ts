import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritePokemons : any [] = this.getAllFavorites();
  private isFavorite : boolean = false;

  getFavoritePokemonByName(pokemonName : string) : boolean{
    this.favoritePokemons.map((pokemon) => {
      if (pokemon.name.toLowerCase() === pokemonName.toLowerCase()){
        this.isFavorite = true
      } else {
        this.isFavorite = false
      }
    })
    return this.isFavorite
  }

  getAllFavorites(){
    return JSON.parse(localStorage.getItem('favoriteListPokemon') || "[]");
  }

  setFavoritePokemon(IPokemon_info : any){
    this.favoritePokemons.push(IPokemon_info);
    localStorage.setItem('favoriteListPokemon', JSON.stringify(this.favoritePokemons));
  }

  deleteFavoritePokemon(pokemonName : string){
    this.favoritePokemons = this.favoritePokemons.filter(pokemon => pokemon.name !== pokemonName);
    localStorage.setItem('favoriteListPokemon', JSON.stringify(this.favoritePokemons))
  }

}
