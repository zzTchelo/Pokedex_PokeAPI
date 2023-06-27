import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent {

  private readonly isFavorite : string = 'fa-solid fa-heart-circle-check';
  private readonly notFavorite : string = 'fa-solid fa-heart-circle-plus';
  private favoriteIcon : boolean = false;

  public favoriteIconCSS : string = this.notFavorite;

  @Input() pokemonReference : any;

  constructor(
    private storage : FavoritesService
  ) {}

  setStorageItem(){
    if (!this.favoriteIcon) {
      this.storage.setFavoritePokemon(this.pokemonReference);
      this.favoriteIconCSS = this.isFavorite;
      this.favoriteIcon = true
    } else {
      this.storage.deleteFavoritePokemon(this.pokemonReference.id);
      this.favoriteIconCSS = this.notFavorite;
      this.favoriteIcon = false
    }
  }
}
