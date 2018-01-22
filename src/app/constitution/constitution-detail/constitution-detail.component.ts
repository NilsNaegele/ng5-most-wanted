import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConstitutionService } from './../../core/services/constitution.service';

@Component({
  selector: 'app-constitution-detail',
  templateUrl: './constitution-detail.component.html',
  styleUrls: ['./constitution-detail.component.scss']
})
export class ConstitutionDetailComponent implements OnInit {
  law;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constitutionService: ConstitutionService) {
              this.route.params.subscribe((params: any) => {
                if (params['id']) {
                  this.constitutionService.getLawById(params['id'])
                      .subscribe((law: any) => {
                        if (Object.keys(law).length === 0) {
                          this.navigateLawsHome();
                        }
                        this.law = law;
                      });
                }
              });
              }

  navigateLawsHome() {
    this.router.navigate(['/constitution']);
  }

  ngOnInit() {
  }

}
