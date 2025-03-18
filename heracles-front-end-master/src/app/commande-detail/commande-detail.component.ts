import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface OrderItem {
    product: string;
    quantity: number;
    price: number;
}

interface Order {
    id: number;
    client: string;
    date: string;
    total: number;
    address: string;
    items: OrderItem[];
}

@Component({
    selector: 'app-commande-detail',
    templateUrl: './commande-detail.component.html',
    styleUrls: ['./commande-detail.component.scss']
})
export class CommandeDetailComponent {
    order: Order | null = null;

    constructor(private route: ActivatedRoute, private router: Router) {
        const orderId = Number(this.route.snapshot.paramMap.get('id'));
        this.order = {
            id: orderId,
            client: 'Ali Ben Salah',
            date: '2025-03-14',
            total: 250,
            address: '12 Rue Habib Bourguiba, Tunis',
            items: [
                { product: 'Ampoule LED', quantity: 2, price: 30 },
                { product: 'Panneau Solaire', quantity: 1, price: 190 }
            ]
        };
    }

    goBack() {
        this.router.navigate(['/mes-commandes']);
    }
}
