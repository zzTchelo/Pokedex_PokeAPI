import { PokemonService } from './../pokemon.service';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {
  public filter : string = '';
  public getAllPokemons : any;

  constructor(
    private service : PokemonService,
  ){ }

  ngOnInit() {
    this.service.listaPokemons().subscribe((pokemons) => {
        this.getAllPokemons = pokemons.results
    })
  }

  onSearchedTextEntered (searchValue : string) {
    this.filter = searchValue;
    //console.log(this.filter);
    this.service.listaPokemons().subscribe((pokemons) => {
      if (this.filter.trim().length > 0){
        this.getAllPokemons = pokemons.results.filter((results) => {
          // -> Retorna pokemon que inicia com o que foi escrito
          return !results.name.indexOf(this.filter.toLowerCase())
          // -> Retorna pokemon que contem o que foi escrito
          //return results.name.includes(this.filter.toLowerCase())
        })
      } else {
        this.getAllPokemons = pokemons.results
      }
    })
  }
}
