import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css']
})
export class LoadMoreButtonComponent implements OnInit{

  constructor( ) { }

  ngOnInit(): void {

  }

  @Input() label : string = '';
  @Input() qtdMoves : number = 0;
  @Input() qtdMovesTotal : number = 0;

  @Output() moreMovesEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  MoreMoves(){
    if (this.qtdMoves < this.qtdMovesTotal)
      this.moreMovesEvent.emit(true)

    if (this.qtdMoves > this.qtdMovesTotal)
      this.moreMovesEvent.emit(false)
  }
}
