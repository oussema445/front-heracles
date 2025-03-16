import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false; // État initial de la sidebar (ouverte)

  // Méthode pour basculer l'état de la sidebar
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  // Méthode de déconnexion
  logout() {
    console.log('Déconnexion réussie');
    // Ajoutez ici la logique de déconnexion
  }
}