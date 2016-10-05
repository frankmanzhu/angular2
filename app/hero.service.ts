/**
 * Created by Frank on 2016/10/5.
 */

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  // This is a dummy method, in real scenario, it always requires Promise
  getHeroesFast(): Hero[] {
    return HEROES;
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
