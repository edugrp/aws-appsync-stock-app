import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
    stockList: any = [];

    constructor(private api: APIService) {}

    ngOnInit(): void {
        this.listStocks();
    }

    async listStocks() {
        const result = await this.api.ListStocks();
        this.stockList = result.items;
    }
}
