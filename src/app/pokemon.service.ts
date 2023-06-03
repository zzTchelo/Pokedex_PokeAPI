import { IPokemon, IPokemon_info } from './pokemon';
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

  private readonly API : string = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'


  listaPokemons(): Observable<IPokemon>{
    return this.http.get<IPokemon>(this.API);
  }

  informacoesPokemon (url : string) : Observable<IPokemon_info>{
    return this.http.get<IPokemon_info>(url);
  }
}
