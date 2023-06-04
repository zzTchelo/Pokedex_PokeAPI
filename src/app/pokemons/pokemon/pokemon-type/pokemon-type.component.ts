import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit{
  @Input() types : string = "";

  constructor() { }

  ngOnInit(): void {

  }
}
