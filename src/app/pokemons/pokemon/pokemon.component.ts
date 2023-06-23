import { IPokemon_info } from './../../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  public pokemon: IPokemon_info = { id: 0, name: "", base_experience : 0, height : 0, weight : 0,
    sprites : { front_default : ""},
    types : [{ slot: 0, type : { name : "", url : ""}}],
    abilities : [{ is_hidden : false, slot : 0, ability : {name : "", url : ""}}],
    moves : [{ move: { name : "", url : ""}, version_group_details : [{ level_learned_at : 0 }]}],
    stats : [{ base_stat : 0, effort : 0, stat : { name : ""}}]
  };

  public readonly qtdMovesPerPage : number = 10
  public moreMoves : number = this.qtdMovesPerPage;

  @Input() private URL_Abilities : string = "";
  @Input() private URL_Moves : string = "";
  label : string = "Ver todos"

  constructor(
    private service : PokemonService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    const nome = this.route.snapshot.paramMap.get('nome')
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}/`
    this.service.informacoesPokemon(url).subscribe((pokemon_info) =>{
      this.pokemon = pokemon_info

      this.pokemon.types.map( ({type}) => {
        this.URL_Abilities = type.url
      })

      this.pokemon.moves.map( ({move}) => {
        this.URL_Moves = move.url
      })
    })
  }

  loadMoreMoves(moreMoves : boolean) {
    if (moreMoves == true){
      this.moreMoves = Infinity;
      this.label = "Mostrar menos"
    } else {
      this.moreMoves = this.qtdMovesPerPage
      this.label = "Ver todos"
    }
  }
}
