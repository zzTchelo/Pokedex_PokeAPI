import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})


export class PokemonsComponent implements OnInit {

  public pokemons : IPokemon = {count: 0,previous: "",next: "",results:[{name: "", url: ""}]};

  constructor(
    private service : PokemonService,
  ){ }

  ngOnInit() {
    this.service.listaPokemons().subscribe((pokemon) => {
        this.pokemons = pokemon
        console.log(pokemon)

        this.pokemons.results.map((imagens) =>{
          //this.url_imagens = this.http.get<string>(imagens.url)
          console.log(imagens.url)
          this.service.informacoesPokemon(imagens.url).subscribe((pokemon_info) =>{
            console.log(pokemon_info)
          })
        })
    })


  }
}
