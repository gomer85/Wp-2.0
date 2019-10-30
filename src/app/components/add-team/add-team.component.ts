import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../../services/TeamService';
import { Team } from '../../models/team';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeamForm = new FormGroup({
    name: new FormControl(''),
    sportId: new FormControl(''),
  });

  constructor(private teamService: TeamService) {}

  ngOnInit() {
  }

  onSubmit(): void {
    var team = new Team();
    team.name = this.addTeamForm.controls.name.value;
    team.sportId = this.addTeamForm.controls.sportId.value;

    this.teamService.addTeam(team);
    this.addTeamForm.reset();
  }
}
