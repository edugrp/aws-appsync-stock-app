import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
    samples = [
        {
            id: '4d5c57ba-a88f-4d0d-b9d6-c2754a129801',
            symbol: 'APPL',
            name: 'Apple',
            qtd: 10,
            buyPrice: 200,
            regularMarketPrice: 220,
            regularMarketChangePercent: 1.12,
            profit: 200,
            profitPercent: 10,
        },
        {
            id: 'f3fb55a8-6e85-467c-a16e-b9ac038e62cc',
            symbol: 'MSFT',
            name: 'Microsoft',
            qtd: 30,
            buyPrice: 300,
            regularMarketPrice: 285,
            regularMarketChangePercent: 2.32,
            profit: -450,
            profitPercent: -5,
        },
    ];
    displayedColumns: string[] = [
        'symbol',
        'company-name',
        'qtd',
        'buyPrice',
        'price',
        'change',
        'profit',
        'profitPercent',
        'action',
    ];
    stockList: any = [];

    constructor(private api: APIService) {}

    ngOnInit(): void {
        this.listStocks();
    }

    async listStocks() {
        // const result = await this.api.ListStocks();
        this.stockList = [];
        const list = await this.api.ListPortifolios();

        this.stockList = await Promise.all(
            list.items.map(async (item) => {
                console.log(item);
                const summary = await this.api.GetStockSummary({ region: 'US', symbol: item!.stock.symbol });
                console.log(summary);
                return {
                    id: item!.id,
                    symbol: item!.stock.symbol,
                    name: item!.stock.name,
                    qtd: item!.qtd,
                    buyPrice: item!.buyPrice,
                    regularMarketPrice: summary.price?.regularMarketPrice?.raw,
                    regularMarketChangePercent: summary.price?.regularMarketChangePercent?.raw,
                    profit: (summary.price!.regularMarketPrice!.raw! - item!.buyPrice) * item!.qtd,
                    profitPercent: (summary.price!.regularMarketPrice!.raw! / item!.buyPrice - 1) * 100,
                };
            })
        );
    }

    async sellStock(stock: any) {
        console.log('stock to sell: ', stock);
        await this.api.DeletePortifolio({ id: stock.id });
        this.listStocks();
    }
}
