import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {
  public filtro : string = '';
  public getAllPokemons : any;

  constructor(
    private service : PokemonService,
  ){ }

  ngOnInit() {
    this.service.listaPokemons().subscribe((pokemons) => {
      if (this.filtro.trim().length > 0){
        this.getAllPokemons = pokemons.results.filter((results) => {
          return !results.name.indexOf(this.filtro.toLowerCase())
        })
      } else {
        this.getAllPokemons = pokemons.results
      }
    })
  }
}
