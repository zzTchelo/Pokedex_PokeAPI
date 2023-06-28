import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit{

  private readonly isFavorite : string = 'fa-solid fa-heart-circle-check';
  private readonly notFavorite : string = 'fa-solid fa-heart-circle-plus';
  private favoriteIcon : boolean = false;

  public favoriteIconCSS : string = this.notFavorite;

  i : number = 0;

  @Input() pokemonReference : any;

  constructor(
    private storage : FavoritesService
  ) {}

  ngOnInit(): void {
    if (this.storage.getFavoritePokemonByName(this.pokemonReference.name)){
      console.log(this.storage.getFavoritePokemonByName(this.pokemonReference.name))
      console.log(this.pokemonReference)
      //console.log(this.i++)
    }
  }

  setStorageItem(){
    if (!this.favoriteIcon) {
      this.storage.setFavoritePokemon(this.pokemonReference);
      this.favoriteIconCSS = this.isFavorite;
      this.favoriteIcon = true
    } else {
      this.storage.deleteFavoritePokemon(this.pokemonReference.name);
      this.favoriteIconCSS = this.notFavorite;
      this.favoriteIcon = false
    }
  }
}
