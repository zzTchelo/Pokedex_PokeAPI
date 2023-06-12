import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {

  private setAllPokemons : any;
  public getAllPokemons : any;
  //public pokemons : IPokemon_results = {results:[{name: "", url: ""}]};

  constructor(
    private service : PokemonService,
  ){ }

  ngOnInit() {
    this.service.listaPokemons().subscribe((pokemons) => {
      this.setAllPokemons = pokemons;
      this.getAllPokemons = this.setAllPokemons;
    })
  }

  getPokemonsByName (name : String) {
    const filteredPokemons = this.getAllPokemons.results.filter( (results : any) => {
      return !results.name.indexOf(name.toLowerCase());
    })
      this.getAllPokemons = filteredPokemons;
  }
}
