import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
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
        this.stockList = [];
        const list = await this.api.ListPortifolios();
        // const list = await this.api.ListPortifolios({ qtd: { gt: 10 } }); //sample using a filter

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
