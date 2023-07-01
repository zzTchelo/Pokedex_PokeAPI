import { MatBadgeModule } from '@angular/material/badge';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokemonCardComponent } from './pokemons/pokemon-card/pokemon-card.component';
import { PokemonAbilityComponent } from './pokemons/pokemon/pokemon-ability/pokemon-ability.component';
import { PokemonMoveComponent } from './pokemons/pokemon/pokemon-move/pokemon-move.component';
import { PokemonTypeComponent } from './pokemons/pokemon/pokemon-type/pokemon-type.component';
import { LoadMoreButtonComponent } from './pokemons/pokemon/load-more-button/load-more-button.component';
import { FormsModule } from '@angular/forms';
import { PokemonSearchComponent } from './pokemons/pokemon-search/pokemon-search.component';
import { FavoriteIconComponent } from './pokemons/pokemon-card/favorite-icon/favorite-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonsComponent,
    PokemonComponent,
    PokemonCardComponent,
    PokemonAbilityComponent,
    PokemonMoveComponent,
    PokemonTypeComponent,
    LoadMoreButtonComponent,
    PokemonSearchComponent,
    FavoriteIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
