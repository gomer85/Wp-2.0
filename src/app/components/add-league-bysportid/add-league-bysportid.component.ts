import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueService } from '../../services/LeagueService';
import { League } from '../../models/league';

@Component({
  selector: 'app-add-league-bysportid',
  templateUrl: './add-league-bysportid.component.html',
  styleUrls: ['./add-league-bysportid.component.css']
})
export class AddLeagueBysportidComponent implements OnInit {

  addLeagueBySportIdForm = new FormGroup({
    name: new FormControl(''),
    sportId: new FormControl(''),
  });

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
  }

  onSubmit() {
    var league = new League();
    league.name = this.addLeagueBySportIdForm.controls.name.value;
    league.sportId = this.addLeagueBySportIdForm.controls.sportId.value;

    this.leagueService.addLeague(league);

  }
}
