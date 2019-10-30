import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { getAllSports } from '../../services/getAllSports';
import { Sport } from '../../models/Sport';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})

export class AddSportComponent implements OnInit {

  addSportForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private getAllSports: getAllSports) {}

  ngOnInit() {
  }

  onSubmit(): void {
    var sport = new Sport();
    sport.name = this.addSportForm.controls.name.value;

    this.getAllSports.addSport(sport);
    this.addSportForm.reset();
  }
}
