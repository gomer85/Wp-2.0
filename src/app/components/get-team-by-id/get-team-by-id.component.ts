import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../../services/TeamService';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-get-team-by-id',
  templateUrl: './get-team-by-id.component.html',
  styleUrls: ['./get-team-by-id.component.css']
})
export class GetTeamByIdComponent implements OnInit {

      getTeamByIdForm = new FormGroup({
        id: new FormControl(''),
      });

      data: any = [];
      labelId: string;

      constructor(private teamService: TeamService) {}

      ngOnInit() {
      }

      changeLabel(labelId) {
        this.labelId = labelId;
      }

      makeReadable(data) {
        var id = data.id;
        var name = data.name;

        var string = "ID = " + id + " name = " + name;
        return string;
      }
      onSubmit(): void {
        var id = this.getTeamByIdForm.controls.id.value;

        this.teamService.getTeamById(id).subscribe(data => {
            console.log(data);
            this.data = data;
            var newData = this.makeReadable(data);
            document.getElementById(this.labelId).innerHTML = newData;
          });
      }
    }
