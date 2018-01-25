import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss']
})
export class HomeOverviewComponent implements OnInit {
  title = 'Willkommen zu unseren Meistgesuchten Kriminellen';
  ranking = 'Diese Straftäter stehen ganz oben auf unserer Liste.';
  mostWantedBKA = '../../../assets/images/logo-hamburg.jpg';
  description = `Während des G20 Gipfels in Hamburg haben inländische und
                 ausländische Terroristen versucht den Ruf unseres Landes
                 zu schaden.`;
  demand = `Hier können Sie uns bei den Festnahmen helfen.`;

  constructor() { }

  ngOnInit() {
  }

}
