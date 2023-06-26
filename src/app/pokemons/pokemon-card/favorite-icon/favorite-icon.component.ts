import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent {

  @Input() pokemonReference : any;

  constructor(
    private storage : FavoritesService
  ) {}

  setStorageItem(){
    this.storage.setFavoritePokemon(this.pokemonReference)
  }
}
