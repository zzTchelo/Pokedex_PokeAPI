import { FavoritesService } from './../../favorites.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotifyService } from 'src/app/notify.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  constructor(
    private notify : NotifyService,
    private FavoritesService : FavoritesService
  ) { }

  ngOnInit() {
    this.FavoritesService.qtdFavoritos$.subscribe(qtd => {
      this.qtdFavoritos = qtd;
    })
  }

  private showFavorites : boolean = false;

  private readonly favoriteAssigned : string = "fav-icon-assigned";
  private readonly favoriteNotAssigned : string = "fav-icon-not-assigned";

  public qtdFavoritos : number = 0;
  public favoriteIconCSS : string = this.favoriteNotAssigned;
  public page : number = 1;
  public filter : string  = '';

  @Input() count : number = 0;
  @Input() qtdPerPage : number = 0

  @Output() filteredText : EventEmitter<string> = new EventEmitter<string>();
  @Output() previous : EventEmitter<number> = new EventEmitter<number>();
  @Output() next : EventEmitter<number> = new EventEmitter<number>();
  @Output() allFavoritesEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  AllFavorites(){
    if (!this.showFavorites){
      if (this.FavoritesService.getAllFavorites().length > 0){
        this.allFavoritesEvent.emit(true);
        this.favoriteIconCSS = this.favoriteAssigned;
        this.showFavorites = true;
        this.filter = '';
        this.onResetPage();
      } else
        this.notify.notifyMsg('Nenhum favorito cadastrado!!!', 'OK')
    } else {
      this.allFavoritesEvent.emit(false);
      this.favoriteIconCSS = this.favoriteNotAssigned;
      this.showFavorites = false;
      this.filter = '';
      this.onResetPage();
    }
  }

  onfilteredText(){
    this.onResetPage();
    this.filteredText.emit(this.filter);
  }

  onNext(){
    if (this.page < Math.ceil(this.count/this.qtdPerPage))
      this.next.emit(++this.page)
  }

  onPrevious(){
    if (this.page > 1)
      this.next.emit(--this.page)
  }

  onResetPage(){
    this.page = 1;
  }

}
