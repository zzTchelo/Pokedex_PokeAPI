import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { pokemon, pokemon_info } from '../pokemon';

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
    this.service.listaPokemons().subscribe((pokemon) => {
        this.pokemons = pokemon
    })
  }
}
