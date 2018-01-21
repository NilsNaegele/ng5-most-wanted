import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArrestService } from '../../core/services/arrest.service';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  criminal;

  goal = 'KO. KO. KO.';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private arrestService: ArrestService) {
                this.route.params.subscribe((params: any) => {
                        if (params['id']) {
                          this.arrestService.getCriminalById(params['id'])
                                            .subscribe((criminal: any) => {
                                               if (Object.keys(criminal).length === 0) {
                                                 this.navigateCriminalsList();
                                               }
                                               this.criminal = criminal;
                                            });
                        }
                });
               }
  navigateCriminalsList() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
