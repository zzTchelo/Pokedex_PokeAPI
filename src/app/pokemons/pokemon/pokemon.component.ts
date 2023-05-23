import { pokemon_info } from './../../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  public pokemon: pokemon_info = {id: 0, name: "", sprites : {front_default : ""}};

  constructor(
    private service : PokemonService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    const nome = this.route.snapshot.paramMap.get('nome')
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}/`
    this.service.informacoesPokemon(url).subscribe((pokemon_info) =>{
      this.pokemon = pokemon_info
    })
  }
}
