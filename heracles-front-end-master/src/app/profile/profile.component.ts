import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // Exemple de données utilisateur
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country'
  };

  constructor() { }

  ngOnInit(): void {
    // Ici, vous pouvez récupérer les données de l'utilisateur depuis une API si nécessaire
  }
}
