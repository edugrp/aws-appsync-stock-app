import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-trending-icon',
    templateUrl: './trending-icon.component.html',
    styleUrls: ['./trending-icon.component.scss'],
})
export class TrendingIconComponent implements OnInit {
    @Input()
    changePercent = 0;

    constructor() {}

    ngOnInit(): void {}

    trendingIcon() {
        if (this.changePercent > 0) {
            return 'trending_up';
        } else if (this.changePercent < 0) {
            return 'trending_down';
        }
        return 'trending_flat';
    }
}
