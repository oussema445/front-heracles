import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  totalUsers: number = 125;
  totalOrders: number = 450;
  totalRevenue: number = 12000; // Exemple en euros

  constructor(private router:Router) { }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
