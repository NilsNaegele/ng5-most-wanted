import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToSearch() {
    this.router.navigate(['criminals']);
  }

  navigateToPreamble() {
    this.router.navigate(['constitution-preamble']);
  }


  ngOnInit() {
  }

}
