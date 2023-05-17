import { pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http : HttpClient
  ) { }

  private readonly API : string = 'https://pokeapi.co/api/v2/pokemon?limit=151'


  listaPokemons(): Observable<pokemon>{
    return this.http.get<pokemon>(this.API);
  }

  informacoesPokemon (url : string) : Observable<undefined>{
    return this.http.get<undefined>(url);
  }
}
