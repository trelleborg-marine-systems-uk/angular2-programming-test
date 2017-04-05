import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
    selector: 'add-component',
    styleUrls: ['./add-component.component.css'],
    templateUrl: './add-component.component.html'
})
export class AddComponent implements OnInit, OnDestroy {

    public dataTitle: string = "Try change this with your input binding.";
    public dataSubject: string = "Try change this with your input binding.";
    public dataMessage: string = "Try change this with your input binding.";

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
