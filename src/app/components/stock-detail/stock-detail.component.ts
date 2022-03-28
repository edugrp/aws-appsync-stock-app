import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock-detail',
    templateUrl: './stock-detail.component.html',
    styleUrls: ['./stock-detail.component.scss'],
})
export class StockDetailComponent implements OnInit {
    @Input()
    symbol = '';

    stock: any = undefined;

    constructor() {}

    ngOnInit(): void {
        if (this.symbol.length > 0) {
        }
    }
}
