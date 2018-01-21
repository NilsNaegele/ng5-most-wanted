import { Component, OnInit } from '@angular/core';

import { ArrestService } from '../core/services/arrest.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  criminals: Observable<any[]>;

  constructor(private arrestService: ArrestService) { }

  ngOnInit() {
    this.getAllCriminals();
  }

  getAllCriminals() {
    this.criminals = this.arrestService.getAllCriminals();
  }

}
