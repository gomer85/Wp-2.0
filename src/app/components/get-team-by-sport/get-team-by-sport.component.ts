import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../../services/TeamService';
import { Team } from '../../models/team';

@Component({
  selector: 'app-get-team-by-sport',
  templateUrl: './get-team-by-sport.component.html',
  styleUrls: ['./get-team-by-sport.component.css']
})

export class GetTeamBySportComponent implements OnInit {

  getTeamsBySportForm = new FormGroup({
    sportId: new FormControl(''),
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
      text = text + " name = " + data[i].name;
      text = text + " sport ID = " + data[i].sportId + "<br>";
    }

    return text
  }
  onSubmit(): void {
    var sportId = this.getTeamsBySportForm.controls.sportId.value;

    this.teamService.getTeamsBySport(sportId).subscribe(data => {
      console.log(data);
      var newData = this.makeReadable(data);
      document.getElementById(this.labelId).innerHTML = newData;
    });
  }


}
