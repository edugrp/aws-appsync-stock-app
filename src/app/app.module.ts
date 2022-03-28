import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { MarketTrendingComponent } from './components/market-trending/market-trending.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
    declarations: [AppComponent, AuthComponent, StockListComponent, StockDetailComponent, MarketTrendingComponent, DashboardComponent],
    imports: [BrowserModule, AppRoutingModule, AmplifyAuthenticatorModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
