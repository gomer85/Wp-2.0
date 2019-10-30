import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueService } from '../../services/LeagueService';
import { League } from '../../models/league';

@Component({
  selector: 'app-get-league-by-id',
  templateUrl: './get-league-by-id.component.html',
  styleUrls: ['./get-league-by-id.component.css']
})
export class GetLeagueByIdComponent implements OnInit {

    getLeagueByIdForm = new FormGroup({
      id: new FormControl(''),
    });

    data: any = [];
    labelId: string;

    constructor(private leagueService: LeagueService) {}

    ngOnInit() {
    }

    changeLabel(labelId) {
      this.labelId = labelId;
    }

    makeReadable(data) {
      var id = data.id;
      var name = data.name;
      var sportId = data.sportId;

      var string = "ID = " + id + " name = " + name +  " sport ID = " + sportId;
      return string
    }
    onSubmit(): void {
      var id = this.getLeagueByIdForm.controls.id.value;

      this.leagueService.getLeagueById(id).subscribe(data => {
          console.log(data);
          this.data = data;
          var newData = this.makeReadable(data);
          document.getElementById(this.labelId).innerHTML = newData;
        });
    }


  }
