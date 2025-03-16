import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isModalOpen = false;
  isLoggedIn = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.loginForm.reset(); // Réinitialiser le formulaire à la fermeture
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
}