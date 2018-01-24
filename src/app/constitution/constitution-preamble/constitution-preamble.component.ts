import { Component, OnInit } from '@angular/core';

import { ConstitutionService } from './../../core/services/constitution.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-constitution-preamble',
  templateUrl: './constitution-preamble.component.html',
  styleUrls: ['./constitution-preamble.component.scss']
})
export class ConstitutionPreambleComponent implements OnInit {
  foundation = 'Das Grundgesetz für die Bundesrepublik Deutschland ist die Basis für die parlamentarische Demokratie. 23 Mai 1949';
  constitutionPreamble$: Observable<any>;

  constructor(private constitutionService: ConstitutionService) { }

  ngOnInit() {
    this.getConstitutionPreamble();
  }

  getConstitutionPreamble() {
    this.constitutionPreamble$ = this.constitutionService.getPreamble().map(preamble => preamble[0]);
  }

}
