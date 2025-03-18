// paiement.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {

  constructor(private router: Router) {}

  openPaypal() {
    // Logique pour ouvrir PayPal, redirige ou utilise l'API PayPal
    alert('Redirection vers PayPal...');
    this.router.navigate(['/confirmation']);
  }

  openStripe() {
    // Logique pour ouvrir Stripe, redirige ou utilise l'API Stripe
    alert('Redirection vers Stripe...');
    this.router.navigate(['/confirmation']);
  }
}
