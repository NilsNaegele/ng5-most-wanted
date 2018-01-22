import { Component, OnInit } from '@angular/core';

import { ConstitutionService } from './../core/services/constitution.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-constitution',
  templateUrl: './constitution.component.html',
  styleUrls: ['./constitution.component.scss']
})
export class ConstitutionComponent implements OnInit {
  honor = 'dem deutschen Volke zur Ehre';
  constitution: Observable<any>;

  constructor(private constitutionService: ConstitutionService) { }

  ngOnInit() {
    this.getAllLaws();
  }

  getAllLaws() {
    this.constitution = this.constitutionService.getAllLaws();
  }

}
