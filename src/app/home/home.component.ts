import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    private routerSub: Subscription;

    constructor(
        private _route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.routerSub = this._route
            .params
            .subscribe((params) => {
                // Route entry
            });
    }

    public ngOnDestroy(): void {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
    }
}
