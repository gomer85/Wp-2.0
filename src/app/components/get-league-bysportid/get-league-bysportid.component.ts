import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LeagueService} from '../../services/LeagueService';
import {Sport} from '../../models/Sport';

@Component({
  selector: 'app-get-league-bysportid',
  templateUrl: './get-league-bysportid.component.html',
  styleUrls: ['./get-league-bysportid.component.css']
})
export class GetLeagueBysportidComponent implements OnInit {

  getLeaguesBySportForm = new FormGroup({
  sportId: new FormControl(''),
});

data: string[];
labelId: string

constructor(private leagueService: LeagueService) { }

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
  var sportId = this.getLeaguesBySportForm.controls.sportId.value;

  this.leagueService.getLeaguesBySport(sportId).subscribe(data => {
    console.log(data);
    //  this.data = data;
    var newData = this.makeReadable(data);
    document.getElementById(this.labelId).innerHTML = newData;
  });


}
}
