import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faUsers, faChartBar, faInfoCircle, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ProductListComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    PersonalInfoComponent,
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    StatisticsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Ajoutez les icônes à la bibliothèque FontAwesome
    library.add(faList, faUsers, faChartBar, faInfoCircle, faUser, faSignOutAlt);
  }
 }
