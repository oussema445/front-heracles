import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    { name: "Produit IA 1", description: "Description générée par IA", price: "99€" },
    { name: "Produit IA 2", description: "Une autre suggestion IA", price: "149€" }
  ];
  
}
