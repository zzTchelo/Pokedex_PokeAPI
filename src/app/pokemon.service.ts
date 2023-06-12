import { IPokemon, IPokemon_ability, IPokemon_info, IPokemon_move } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http : HttpClient
  ) { }

  private readonly API : string = 'https://pokeapi.co/api/v2/pokemon?'

  listaPokemons () : Observable<IPokemon>{
    const offset = 0;
    const limit = 151;

    let params = new HttpParams()
      .set("limit", limit)
      .set("offset", offset)

    return this.http.get<IPokemon>(this.API,{params});
  }

  informacoesPokemon (url : string) : Observable<IPokemon_info>{
    return this.http.get<IPokemon_info>(url);
  }

  abilitiesPokemon (url : string) : Observable<IPokemon_ability>{
    return this.http.get<IPokemon_ability>(url);
  }

  movesPokemon (url : string) : Observable<IPokemon_move>{
    return this.http.get<IPokemon_move>(url);
  }
}
