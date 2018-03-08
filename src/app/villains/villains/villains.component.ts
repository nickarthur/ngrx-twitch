import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Villain } from '../../core';
import { VillainService } from '../villain.service';

@Component({
  selector: 'aw-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],

  // this could be provided anywhere this component can get to it
  providers: [VillainService],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainsComponent implements OnInit {
  addingVillain = false;
  selectedVillain: Villain;

  villains$: Observable<Villain[]>;
  loading$: Observable<boolean>;

  constructor(public villainsService: VillainService) {
    this.villains$ = this.villainsService.entities$;
    this.loading$ = this.villainsService.loading$;
  }

  ngOnInit() {
    this.getVillains();
  }

  clear() {
    this.addingVillain = false;
    this.selectedVillain = null;
  }

  deleteVillain(villain: Villain) {
    this.unselect();
    this.villainsService.delete(villain.id);
  }

  enableAddMode() {
    this.addingVillain = true;
    this.selectedVillain = null;
  }

  getVillains() {
    this.villainsService.getAll();
    this.unselect();
  }

  onSelect(villain: Villain) {
    this.addingVillain = false;
    this.selectedVillain = villain;
  }

  update(villain: Villain) {
    this.villainsService.update(villain);
  }

  add(villain: Villain) {
    this.villainsService.add(villain);
  }

  unselect() {
    this.addingVillain = false;
    this.selectedVillain = null;
  }
}
