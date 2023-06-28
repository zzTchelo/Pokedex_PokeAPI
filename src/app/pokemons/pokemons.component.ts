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

  public count : number = 0;
  public limit : number = 30;
  private offset : number = 0;

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
    //console.log(event)
    if (event)
      this.getAllPokemons = this.favoritePokemons.getAllFavorites()
    else
    this.getAllPokemons = this.setAllPokemons;
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
