import { Component, Input, OnInit } from '@angular/core';
import { IPokemon_move } from 'src/app/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: ['./pokemon-move.component.css']
})
export class PokemonMoveComponent implements OnInit{
  @Input() moveUrl : string = "";

  public movePokemon : IPokemon_move = { id : 0, name : "", accuracy : 0, type : { name : "" }, damage_class : { name : "" }}

  constructor(
    private service : PokemonService
  ){ }

  ngOnInit(): void {
    this.service.movesPokemon(this.moveUrl).subscribe((move) =>{
      this.movePokemon = move
      console.log(this.movePokemon)
    })
  }

}
