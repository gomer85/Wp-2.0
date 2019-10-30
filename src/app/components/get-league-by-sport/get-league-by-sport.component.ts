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

        data: string[] = [];
        labelId: string

        constructor(private leagueService: LeagueService) {}

        ngOnInit() {
        }

        changeLabel(labelId) {
          this.labelId = labelId;
        }

        makeReadable(data) {
          console.log(data.size);

          var id = data.id;
          var name = data.name;
          var sportId = data.sportId;

          var array = ["ID = " + id, "name = " + name, "sport ID = " + sportId];
          return array
        }
        onSubmit(): void {
          var sportId = this.getLeaguesBySportForm.controls.sportId.value;

          this.leagueService.getLeaguesBySport(sportId).subscribe(data => {
              console.log(data);
              this.data = data;
              var newData = this.makeReadable(data);
              document.getElementById(this.labelId).innerHTML = newData;
            });
        }


      }
