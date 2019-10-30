import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueService } from '../../services/LeagueService';
import { Sport } from '../../models/sport';

@Component({
  selector: 'app-get-league-by-sport',
  templateUrl: './get-league-by-sport.component.html',
  styleUrls: ['./get-league-by-sport.component.css']
})
export class GetLeagueBySportComponent implements OnInit {

    getLeaguesBySportForm = new FormGroup({
      sportId: new FormControl(''),
    });

    constructor(private leagueService: LeagueService) {}

    ngOnInit() {
    }
/*
    onSubmit(): void {
      let sportId2 = this.getLeaguesBySportForm.controls.sportId.value;
      console.log(sportId2);
      this.leagueService.getLeaguesBySport(sportId2);
      this.getLeaguesBySportForm.reset();
    } */
  }
