import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filter : string  = '';

  @Output() filteredText : EventEmitter<string> = new EventEmitter<string>();

  onfilteredText(){
    this.filteredText.emit(this.filter);
  }

}
