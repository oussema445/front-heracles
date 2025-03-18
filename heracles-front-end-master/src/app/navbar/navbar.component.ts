import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isModalOpen = false;
  isLoggedIn = false;
  isCartOpen = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  cartItems = [
    { name: 'Produit 1', quantity: 2, price: 100 },
    { name: 'Produit 2', quantity: 1, price: 50 }
  ];
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.loginForm.reset(); // Réinitialiser le formulaire à la fermeture
  }
  get totalAmount() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  login() {
    if (this.loginForm.valid) {
      // Simuler une connexion réussie
      this.isLoggedIn = true;
      alert('Connexion réussie ! 🚀');
      this.closeModal();
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  logout() {
    this.isLoggedIn = false;
    alert('Déconnexion réussie ! 👋');
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
  updateQuantity(item: any): void {
    if (item.quantity < 1) {
      item.quantity = 1; // Empêcher une quantité négative ou nulle
    }
    // Vous pouvez également mettre à jour le panier dans le backend ici
  }

  removeItem(item: any): void {
    this.cartItems = this.cartItems.filter((i) => i !== item);
  }
  goToCommande() {
    // Fermer le panier
    this.isCartOpen = false;
  
    // Rediriger vers la page de commande
    this.router.navigate(['/commander']);
  }
  
}