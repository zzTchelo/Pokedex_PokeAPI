import { Component, Input, OnInit } from '@angular/core';
import { PokemonsComponent } from '../pokemons/pokemons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  filter : string  = '';

  constructor(
    //private filteredPokemons : PokemonsComponent
  ) {}

  ngOnInit(): void {

  }
}
