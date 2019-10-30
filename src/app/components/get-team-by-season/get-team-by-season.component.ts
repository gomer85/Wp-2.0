import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../../services/TeamService';
import { Team } from '../../models/team';

@Component({
  selector: 'app-get-team-by-season',
  templateUrl: './get-team-by-season.component.html',
  styleUrls: ['./get-team-by-season.component.css']
})
export class GetTeamBySeasonComponent implements OnInit {


    getTeamsBySeasonForm = new FormGroup({
      seasonId: new FormControl(''),
    });

    data: string[];
    labelId: string

    constructor(private teamService: TeamService) { }

    ngOnInit() {
    }

    changeLabel(labelId) {
      this.labelId = labelId;
    }

    makeReadable(data) {
      var text = "";
      for (let i = 0; i < data.length; i++) {
        text = text + "ID = " + data[i].id;
        text = text + " name = " + data[i].name + "<br>";
      }

      return text
    }

    onSubmit(): void {
      var sportId = this.getTeamsBySeasonForm.controls.seasonId.value;

      this.teamService.getTeamsBySeason(sportId).subscribe(data => {
        console.log(data);
        var newData = this.makeReadable(data);
        document.getElementById(this.labelId).innerHTML = newData;
      });
    }


  }
