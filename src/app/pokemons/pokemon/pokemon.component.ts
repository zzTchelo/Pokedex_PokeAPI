import { IPokemon_info } from './../../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  public pokemon: IPokemon_info = {id: 0, name: "", base_experience : 0, height : 0, weight : 0,
    sprites : {front_default : ""},
    types : [{ slot: 0, type : { name : "", url : ""}}],
    abilities : [{is_hidden : false, slot : 0, ability : {name : "", url : ""}}]
  };

  constructor(
    private service : PokemonService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    const nome = this.route.snapshot.paramMap.get('nome')
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}/`
    this.service.informacoesPokemon(url).subscribe((pokemon_info) =>{
      this.pokemon = pokemon_info
      console.log(this.pokemon.types.map( ({type}) => {
        return type.url
      } ))
    })
  }
}
