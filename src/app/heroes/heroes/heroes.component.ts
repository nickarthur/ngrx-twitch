import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Hero } from '../../core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'aw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],

  // this could be provided anywhere this component can get to it
  providers: [HeroService],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {
  addingHero = false;
  selectedHero: Hero;

  heroes$: Observable<Hero[]>;
  loading$: Observable<boolean>;

  constructor(public heroesService: HeroService) {
    this.heroes$ = this.heroesService.entities$;
    this.loading$ = this.heroesService.loading$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  clear() {
    this.addingHero = false;
    this.selectedHero = null;
  }

  deleteHero(hero: Hero) {
    this.unselect();
    this.heroesService.delete(hero.id);
  }

  enableAddMode() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  getHeroes() {
    this.heroesService.getAll();
    this.unselect();
  }

  onSelect(hero: Hero) {
    this.addingHero = false;
    this.selectedHero = hero;
  }

  update(hero: Hero) {
    this.heroesService.update(hero);
  }

  add(hero: Hero) {
    this.heroesService.add(hero);
  }

  unselect() {
    this.addingHero = false;
    this.selectedHero = null;
  }
}
