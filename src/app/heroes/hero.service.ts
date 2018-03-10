// ngrx-data version
import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';

import { Hero, ToastService } from '../core';

@Injectable()
export class HeroService extends EntityServiceBase<Hero> {
  constructor(entityServiceFactory: EntityServiceFactory, private toastService: ToastService) {
    super('Hero', entityServiceFactory);
  }
}
