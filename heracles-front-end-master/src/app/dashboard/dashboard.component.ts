import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  sections = [
    { title: 'Utilisateurs', image: 'assets/list-user.png', route: '/users' },
    { title: 'Commandes', image: 'assets/list-orders.jpg', route: '/orders' },
    { title: 'Statistiques', image: 'assets/stats.png', route: '/statistics' }
  ];
  
}
