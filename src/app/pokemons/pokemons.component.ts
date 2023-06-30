import { FavoritesService } from '../favorites.service';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {
  public getAllPokemons : any [] = [];
  public setAllPokemons : any [] = [];

  private showFavorites : boolean = false;
  public readonly qtdPerPage = 30
  public limit : number = this.qtdPerPage;
  public offset : number = 0;
  public count : number = 0;

  constructor(
    private service : PokemonService,
    private favoritePokemons : FavoritesService
  ){ }

  ngOnInit() {
    this.service.listaPokemons(0, 999).subscribe((pokemons) => {
      this.setAllPokemons = pokemons.results
      this.getAllPokemons = pokemons.results
      this.count = this.getAllPokemons.length
    })
  }

  onSearchedTextEntered (searchValue : string) {
    if (!this.showFavorites){
      this.getAllPokemons = this.setAllPokemons.filter((pokemon : { name : string, url : string}) => {
        return pokemon.name.toLowerCase().includes(searchValue);
      });
      this.count = this.getAllPokemons.length
      this.onResetPage()
    } else {
      this.getAllPokemons = this.favoritePokemons.getAllFavorites().filter((pokemon : { name : string, url : string}) => {
        return pokemon.name.toLowerCase().includes(searchValue);
      });
      this.count = this.getAllPokemons.length
      this.onResetPage()
    }
  }

  onSearchedTextEnteredOld (searchValue : string) {
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
      this.count = this.getAllPokemons.length
      this.showFavorites = true
      this.onResetPage()
    }else{
      this.getAllPokemons = this.setAllPokemons;
      this.count = this.getAllPokemons.length
      this.showFavorites = false
      this.onResetPage()
    }
  }

  onPreviousPage( page : number ){
    this.offset = (page - 1) * this.qtdPerPage
    this.limit = page * this.qtdPerPage
  }

  onNextPage ( page : number ){
    this.offset = (page - 1) * this.qtdPerPage
    this.limit = page * this.qtdPerPage
  }

  onResetPage(){
    this.offset = 0
    this.limit = this.qtdPerPage
  }
}
