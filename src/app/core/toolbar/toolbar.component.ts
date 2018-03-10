import { Component } from '@angular/core';

@Component({
  selector: 'aw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  labTitle = 'ngrx-twitch';
  labState = 'ngrx-data: ngrx with zero boilerplate';
}
