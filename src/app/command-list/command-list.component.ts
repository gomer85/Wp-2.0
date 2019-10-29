import { Component } from '@angular/core';
import { apicommands } from '../apicommands';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent {
  apicommands = apicommands;

  randomButton() {

  }
}
