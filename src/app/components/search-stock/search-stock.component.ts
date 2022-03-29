import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-search-stock',
    templateUrl: './search-stock.component.html',
    styleUrls: ['./search-stock.component.scss'],
})
export class SearchStockComponent implements OnInit {
    stockList: any = [];

    constructor(private api: APIService) {}

    ngOnInit(): void {}

    async searchStock(search: HTMLInputElement) {
        if (search.value.length > 2) {
            const list = await this.api.SearchStocks({ region: 'US', q: search.value });
            this.stockList = list.quotes?.filter((item) => item?.typeDisp == 'Equity');
        }
    }

    addStock(stock: any) {
        console.log('stock to add: ', stock);
    }
}
