import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-market-trending',
    templateUrl: './market-trending.component.html',
    styleUrls: ['./market-trending.component.scss'],
})
export class MarketTrendingComponent implements OnInit {
    displayedColumns: string[] = ['symbol', 'company-name', 'price', 'change', 'action'];
    quotes: any = [];

    constructor(private api: APIService) {}

    ngOnInit(): void {
        this.listStocks();
    }

    async listStocks() {
        const result = await this.api.ListMarketTrending('CA');
        this.quotes = result.quotes?.filter((item) => item?.quoteType == 'EQUITY');
    }

    async addStock(stock: any) {
        console.log('stock to add: ', stock);
        const stockCreated = await this.api.CreateStock({ symbol: stock.symbol, name: stock.shortName });
        this.api.CreatePortifolio({ stockID: stockCreated.id, buyPrice: stock.regularMarketPrice, qtd: 100 });
    }
}
