import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IPokemon_ability } from 'src/app/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.css']
})
export class PokemonAbilityComponent implements OnInit{
  @Input() abilityUrl : string = "";

  public ability : IPokemon_ability = { id : 0, name : ""}

  constructor(
    private service : PokemonService
  ) { }

  ngOnInit(): void {
    this.service.abilitiesPokemon(this.abilityUrl).subscribe((description) => {
      this.ability = description
      //console.log(description)
    })
  }

}
