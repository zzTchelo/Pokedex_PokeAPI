import { FavoritesService } from '../favorites.service';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {
  public getAllPokemons : any;
  public setAllPokemons : any;
  public setFavoritePokemons : any;

  public count : number = 0;
  public limit : number = 30;
  private offset : number = 0;
  private showFavorites : boolean = false;

  constructor(
    private service : PokemonService,
    private favoritePokemons : FavoritesService
  ){ }

  ngOnInit() {
    this.service.listaPokemons(this.offset, this.limit).subscribe((pokemons) => {
      this.setAllPokemons = pokemons.results
      this.getAllPokemons = pokemons.results
      this.count = pokemons.count
    })
    this.setFavoritePokemons = this.favoritePokemons.getAllFavorites;
  }

  onSearchedTextEntered (searchValue : string) {
    if (searchValue.trim().length > 0){
      this.service.listaPokemons(0, this.count).subscribe((pokemons) => {
        this.getAllPokemons = pokemons.results.filter((results) => {
          // -> Retorna pokemon que inicia com o que foi escrito
          return !results.name.indexOf(searchValue.toLowerCase())
          // -> Retorna pokemon que contem o que foi escrito
          //return results.name.includes(searchValue.toLowerCase())
        })
      })
    } else {
      this.service.listaPokemons(this.offset, this.limit).subscribe((pokemons) => {
        this.getAllPokemons = pokemons.results
      })
    }
  }

  onAllFavorites(event : boolean){
    if (event){
      this.getAllPokemons = this.favoritePokemons.getAllFavorites()
      this.showFavorites = true
    }else{
      this.getAllPokemons = this.setAllPokemons;
      this.showFavorites = false
    }
  }

  onPreviousPage( page : number ){
    this.offset = this.limit * (page - 1);
    this.service.listaPokemons(this.offset, this.limit).subscribe((pokemons) => {
      this.getAllPokemons = pokemons.results
    })
  }

  onNextPage ( page : number ){
    this.offset = this.limit * (page - 1);
    this.service.listaPokemons(this.offset, this.limit).subscribe((pokemons) => {
      this.getAllPokemons = pokemons.results
    })
  }

}
