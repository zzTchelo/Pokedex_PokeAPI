import { Component, Input, OnInit } from '@angular/core';
import { IPokemon_card } from 'src/app/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit{

  @Input() pokemonUrl : string = "";

  public pokemon : IPokemon_card = {  id: 0, name: "", sprites : { front_default : ""}};

  constructor (
    private service : PokemonService
  ) { }

  ngOnInit () {
    this.service.informacoesPokemon(this.pokemonUrl).subscribe((pokemon) =>{
      this.pokemon = pokemon
    })
  }
}
