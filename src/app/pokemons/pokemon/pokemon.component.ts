import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  public pokemon : string | null = "";

  constructor(
    private service : PokemonService,
    private http : HttpClient,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() : string | null {
    const pokemon = this.route.snapshot.paramMap.get('nome')
    return this.pokemon = pokemon
  }
}
