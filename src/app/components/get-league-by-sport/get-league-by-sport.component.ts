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

        data: string[];
        labelId: string

        constructor(private leagueService: LeagueService) {}

        ngOnInit() {
        }

        changeLabel(labelId) {
          this.labelId = labelId;
        }

        makeReadable(data) {
          var string = new String();
          for (let i = 0; i < data.length; i++) {
            string = string + "ID = " + data[i].id;
            string = string + " ID = " + data[i].id;
            string = string + " name = " + data[i].name;
            string = string + " sport ID = " + data[i].sportId + "<br>";
          }

          return string
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
