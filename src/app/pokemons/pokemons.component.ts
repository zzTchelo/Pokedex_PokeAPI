import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {

  public pokemons : pokemon = {count: 0,previous: "",next: "",results:[{name: "", url: ""}]};

  constructor(
    private service : PokemonService
  ){ }

  ngOnInit() {
    return this.service.listaPokemons().subscribe((pokemon) => {
        this.pokemons = pokemon
          console.log(this.pokemons.results)
    })
  }

  pesquisaPokemon(filtro : string) {

    if (filtro) {
      return this.pokemons.results.filter((pokemon) => pokemon.name.includes(filtro));
    }

    return this.pokemons;
  }
}
