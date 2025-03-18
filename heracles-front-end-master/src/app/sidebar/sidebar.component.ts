import { Component } from '@angular/core';
import { faBars, faList, faUsers, faChartBar, faInfoCircle, faUser, faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false; // Variable pour gérer l'état du menu
  faBars = faBars;
  faList = faList;
  faUsers = faUsers;
  faChartBar = faChartBar;
  faInfoCircle = faInfoCircle;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faHome = faHome;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed; // Change l'état du menu
  }

  logout() {
    console.log("Déconnexion...");
  }
}
