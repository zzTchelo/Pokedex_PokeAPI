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

  private showFavorites : boolean = false;
  private showNotFavorites : boolean = false;

  private readonly favoriteAssigned : string = "fav-icon-assigned";
  private readonly favoriteNotAssigned : string = "fav-icon-not-assigned";

  public favoriteIconCSS : string = this.favoriteNotAssigned;
  public page : number = 1;
  public filter : string  = '';

  @Input() count : number = 0;
  @Input() limit : number = 0

  @Output() filteredText : EventEmitter<string> = new EventEmitter<string>();
  @Output() previous : EventEmitter<number> = new EventEmitter<number>();
  @Output() next : EventEmitter<number> = new EventEmitter<number>();
  @Output() allFavoritesEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  AllFavorites(){
    if (!this.showFavorites){
      this.allFavoritesEvent.emit(true);
      this.showFavorites = true;
      this.favoriteIconCSS = this.favoriteAssigned;
    } else {
      this.allFavoritesEvent.emit(false);
      this.showFavorites = false;
      this.favoriteIconCSS = this.favoriteNotAssigned;
    }
  }

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
