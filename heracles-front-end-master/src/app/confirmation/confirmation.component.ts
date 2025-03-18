// confirmation.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  constructor(private router: Router) {}

  goHome() {
    // Redirection vers la page d'accueil après confirmation
    this.router.navigate(['/home']);
  }
}
