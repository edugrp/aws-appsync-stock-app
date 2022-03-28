import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketTrendingComponent } from './components/market-trending/market-trending.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

const routes: Routes = [
    {
        path: 'stocks',
        component: StockListComponent,
    },
    {
        path: 'trending',
        component: MarketTrendingComponent,
    },
    {
        path: 'stock-detail',
        component: StockDetailComponent,
    },
    {
        path: '',
        component: DashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
