import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public page : number = 1;
  filter : string  = '';

  @Input() count : number = 0;
  @Input() limit : number = 0

  @Output() filteredText : EventEmitter<string> = new EventEmitter<string>();

  @Output() previous : EventEmitter<number> = new EventEmitter<number>();
  @Output() next : EventEmitter<number> = new EventEmitter<number>();

  onfilteredText(){
    this.filteredText.emit(this.filter);
  }

  onNext(){
    if (this.page < Math.ceil(this.count/this.limit))
      this.next.emit(++this.page)
  }

  onPrevious(){
    if (this.page > 1)
      this.next.emit(--this.page)
  }

}
