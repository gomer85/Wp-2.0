import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AddLeagueBySportIdService} from '../../services/AddLeagueBySportIdService';
import {League} from '../../models/league';

@Component({
  selector: 'app-add-league-bysportid',
  templateUrl: './add-league-bysportid.component.html',
  styleUrls: ['./add-league-bysportid.component.css']
})
export class AddLeagueBysportidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
