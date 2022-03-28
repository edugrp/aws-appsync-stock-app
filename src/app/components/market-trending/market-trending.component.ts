import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-market-trending',
    templateUrl: './market-trending.component.html',
    styleUrls: ['./market-trending.component.scss'],
})
export class MarketTrendingComponent implements OnInit {
    quotes: any = [];

    constructor(private api: APIService) {}

    ngOnInit(): void {
        this.listStocks();
    }

    async listStocks() {
        const result = await this.api.GetMarketTrending('CA');
        this.quotes = result.quotes;
    }
}
