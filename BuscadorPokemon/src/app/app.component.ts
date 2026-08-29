import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';

const TYPE_COLORS: Record<string, string> = {
  normal: '#a8a77a',
  fire: '#ee8130',
  water: '#6390f0',
  electric: '#f7d02c',
  grass: '#7ac74c',
  ice: '#96d9d6',
  fighting: '#c22e28',
  poison: '#a33ea1',
  ground: '#e2bf65',
  flying: '#a98ff3',
  psychic: '#f95587',
  bug: '#a6b91a',
  rock: '#b6a136',
  ghost: '#735797',
  dragon: '#6f35fc',
  dark: '#705746',
  steel: '#b7b7ce',
  fairy: '#d685ad',
};

const STAT_LABELS: Record<string, string> = {
  hp: 'PS',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'At. Esp.',
  'special-defense': 'Def. Esp.',
  speed: 'Velocidad',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query = '';
  pokemon: Pokemon | null = null;
  loading = false;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  search(): void {
    const term = this.query.trim();
    if (!term) {
      this.error = 'Escribe el nombre o numero de un Pokemon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = '';

    this.pokemonService.getPokemon(term).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.pokemon = null;
        this.loading = false;
        this.error = `No se encontro ningun Pokemon con "${term}". Revisa el nombre o el numero.`;
      },
    });
  }

  typeColor(type: string): string {
    return TYPE_COLORS[type] ?? '#777';
  }

  statLabel(name: string): string {
    return STAT_LABELS[name] ?? name;
  }

  statPercent(value: number): number {
    return Math.min(100, Math.round((value / 200) * 100));
  }

  formatId(id: number): string {
    return '#' + id.toString().padStart(3, '0');
  }
}
