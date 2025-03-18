import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { CommandeDetailComponent } from './commande-detail/commande-detail.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ProfileComponent } from './profile/profile.component';
import { CommanderComponent } from './commander/commander.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'mes-commandes', component: MesCommandesComponent },
  { path: 'commande-detail/:id', component: CommandeDetailComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'about-us', component: AProposComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'commander', component: CommanderComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'confirmation', component: ConfirmationComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
