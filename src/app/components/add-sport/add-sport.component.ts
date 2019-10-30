import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SportService } from '../../services/SportService';
import { Sport } from '../../models/sport';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})

export class AddSportComponent implements OnInit {

  addSportForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private sportService: SportService) {}

  ngOnInit() {
  }

  onSubmit(): void {
    var sport = new Sport();
    sport.name = this.addSportForm.controls.name.value;

    this.sportService.addSport(sport);
    this.addSportForm.reset();
  }
}
