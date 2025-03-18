import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Order {
    id: number;
    date: string;
    total: number;
}

@Component({
    selector: 'app-mes-commandes',
    templateUrl: './mes-commandes.component.html',
    styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent {
    constructor(private router: Router) {}

    orders: Order[] = [
        { id: 101, date: '2025-03-14', total: 120 },
        { id: 102, date: '2025-03-10', total: 220 }
    ];

    viewOrder(order: Order) {
        this.router.navigate(['/commande-detail', order.id]);
    }

    cancelOrder(id: number) {
        this.orders = this.orders.filter(order => order.id !== id);
    }

    goToAccueil() {
        this.router.navigate(['/home']);
    }
}
