import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css']
})
export class LoadMoreButtonComponent implements OnInit{

  constructor( ) { }

  ngOnInit(): void {

  }

  label : string = 'Ver todos';
  public moreMoves : number = 10;

  @Output() moreMovesEvent : EventEmitter<number> = new EventEmitter<number>();

  MoreMoves(){
    this.moreMovesEvent.emit(this.moreMoves)
  }

  //this.service.movesPokemon(this.moveUrl).subscribe((move) =>{
  //  this.movePokemon = move
    //console.log(move)
  //})

}
