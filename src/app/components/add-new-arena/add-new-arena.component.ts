import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ArenaService } from '../../services/ArenaService';
import { Arena } from '../../models/arena';

@Component({
  selector: 'app-add-new-arena',
  templateUrl: './add-new-arena.component.html',
  styleUrls: ['./add-new-arena.component.css']
})
export class AddNewArenaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private arenaService: ArenaService) { }

  addArenaForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit() {
  }
  onSubmit() {
    var arena = new Arena();
    arena.name = this.addArenaForm.controls.name.value;

    this.arenaService.addArena(arena);
    this.addArenaForm.reset();
  }
}
