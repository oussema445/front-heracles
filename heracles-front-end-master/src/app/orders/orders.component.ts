import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Order {
    id: number;
    client: string;
    date: string;
    total: number;
    archived: boolean;
}

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
    constructor(private router: Router) {}

    orders: Order[] = [
        { id: 1, client: 'Ali Ben Salah', date: '2025-03-15', total: 250, archived: false },
        { id: 2, client: 'Fatma Trabelsi', date: '2025-03-12', total: 150, archived: false },
        { id: 3, client: 'Mohamed Kacem', date: '2025-03-10', total: 300, archived: false }
    ];

    searchTerm: string = '';

    get filteredOrders() {
        return this.orders.filter(order =>
            (order.client.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
            !order.archived
        );
    }

    archiveOrder(id: number) {
        const order = this.orders.find(o => o.id === id);
        if (order) order.archived = true;
    }

    viewOrder(order: Order) {
        this.router.navigate(['/commande-detail', order.id]);
    }

    goToDashboard() {
        this.router.navigate(['/dashboard']);
    }
}
