import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private storage : Storage = window.localStorage;

  getFavoritePokemonByID(){

  }

  getAllFavorites(){

  }

  setFavoritePokemon(pokemon : any){
    this.storage.setItem('favorite', JSON.stringify(pokemon))
  }

  updateFavoritePokemon(){

  }

  deleteFavoritePokemon(){
    this.storage.removeItem('favorite')
  }

}
