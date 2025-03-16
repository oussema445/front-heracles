import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  archived: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
    constructor(private router: Router) {}
  
  users: User[] = [
    { id: 1, name: 'Ali Ben Salah', email: 'ali@example.com', role: 'Admin', archived: false },
    { id: 2, name: 'Fatma Trabelsi', email: 'fatma@example.com', role: 'Utilisateur', archived: false },
    { id: 3, name: 'Mohamed Kacem', email: 'mohamed@example.com', role: 'Modérateur', archived: false }
  ];

  searchTerm: string = '';

  get filteredUsers() {
    return this.users.filter(user =>
      (user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      !user.archived
    );
  }

  archiveUser(id: number) {
    const user = this.users.find(u => u.id === id);
    if (user) user.archived = true;
  }

  viewUser(user: User) {
    alert(`Nom: ${user.name}\nEmail: ${user.email}\nRôle: ${user.role}`);
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
