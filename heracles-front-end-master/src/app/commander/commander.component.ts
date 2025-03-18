import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss']
})
export class CommanderComponent {
  existingAddress: string = "123, Avenue Habib Bourguiba, Tunis"; // Adresse par défaut du client
  newAddress: string = "";
  confirmExistingAddress: boolean = false;
  enterNewAddress: boolean = false;

  constructor(private router: Router) {}

  toggleAddressOptions() {
    if (this.confirmExistingAddress) {
      this.enterNewAddress = false;
      this.newAddress = "";
    }
    if (this.enterNewAddress) {
      this.confirmExistingAddress = false;
    }
  }

  goToPayment() {
    if (!this.confirmExistingAddress && !this.newAddress) {
      alert("Veuillez confirmer votre adresse ou entrer une nouvelle adresse.");
      return;
    }
    this.router.navigate(['/paiement']);
  }
  submitOrder() {
    let finalAddress = "";

    if (this.confirmExistingAddress) {
      finalAddress = this.existingAddress;
    } else if (this.enterNewAddress && this.newAddress.trim() !== "") {
      finalAddress = this.newAddress;
    } else {
      alert("Veuillez confirmer l'adresse existante ou entrer une nouvelle adresse.");
      return;
    }

    // Stocker l'adresse pour la page de paiement
    localStorage.setItem("deliveryAddress", finalAddress);

    // Redirection vers la page de paiement
    this.router.navigate(['/paiement']);
  }
}

