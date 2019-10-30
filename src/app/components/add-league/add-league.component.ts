import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueService } from '../../services/LeagueService';
import { League } from '../../models/league';

@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styleUrls: ['./add-league.component.css']
})

export class AddLeagueComponent implements OnInit {

  addLeagueForm = new FormGroup({
    name: new FormControl(''),
    sportId: new FormControl(''),
  });

  constructor(private leagueService: LeagueService) {}

  ngOnInit() {
  }

  onSubmit(): void {
    var league = new League();
    league.name = this.addLeagueForm.controls.name.value;
    league.sportId = this.addLeagueForm.controls.sportId.value;

    this.leagueService.addLeague(league);
    this.addLeagueForm.reset();
  }
}
