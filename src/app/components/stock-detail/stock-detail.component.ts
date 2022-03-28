import { Component, Input, OnInit } from '@angular/core';
import { APIService, GetStockSummaryQuery } from 'src/app/services/api.service';
import { from, Observable } from 'rxjs';

@Component({
    selector: 'app-stock-detail',
    templateUrl: './stock-detail.component.html',
    styleUrls: ['./stock-detail.component.scss'],
})
export class StockDetailComponent implements OnInit {
    @Input()
    symbol = '';

    stock: any;

    constructor(private api: APIService) {
        const stockSummary = from(this.getStockSummary());
        stockSummary.subscribe((stock) => (this.stock = stock.price));
    }

    ngOnInit(): void {
        if (this.symbol.length > 0) {
        }
    }

    getStockSummary() {
        return this.api.GetStockSummary({ region: 'US', symbol: 'MSFT' });
    }
}
