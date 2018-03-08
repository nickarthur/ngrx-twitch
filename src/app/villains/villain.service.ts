// ngrx-data version
import { Injectable } from '@angular/core';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';

import { Villain, ToastService } from '../core';

@Injectable()
export class VillainService extends EntityServiceBase<Villain> {

  constructor(
    entityServiceFactory: EntityServiceFactory,
    private toastService: ToastService) {
    super('Villain', entityServiceFactory);
  }
}
