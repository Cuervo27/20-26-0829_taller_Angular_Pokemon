import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon, PokemonApiResponse } from './pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(query: string): Observable<Pokemon> {
    const term = query.trim().toLowerCase();
    return this.http
      .get<PokemonApiResponse>(`${this.baseUrl}/${encodeURIComponent(term)}`)
      .pipe(map((res) => this.mapPokemon(res)));
  }

  private mapPokemon(res: PokemonApiResponse): Pokemon {
    const image =
      res.sprites.other?.['official-artwork']?.front_default ??
      res.sprites.other?.dream_world?.front_default ??
      res.sprites.front_default ??
      '';

    return {
      id: res.id,
      name: res.name,
      image,
      height: res.height / 10,
      weight: res.weight / 10,
      types: res.types.map((t) => t.type.name),
      stats: res.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
    };
  }
}
