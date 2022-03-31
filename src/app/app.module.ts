import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { MarketTrendingComponent } from './components/market-trending/market-trending.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchStockComponent } from './components/search-stock/search-stock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TrendingIconComponent } from './components/trending-icon/trending-icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        StockListComponent,
        StockDetailComponent,
        MarketTrendingComponent,
        DashboardComponent,
        SearchStockComponent,
        TrendingIconComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AmplifyAuthenticatorModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
