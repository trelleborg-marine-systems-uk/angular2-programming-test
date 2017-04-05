import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
    selector: 'fix-component',
    styleUrls: ['./fix-component.component.css'],
    templateUrl: './fix-component.component.html'
})
export class FixComponent implements OnInit, OnDestroy {

    public input: string = '';
    public todos: string[] = [];

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

    // -- Broken Code Below This Line --
    public addTodo(newTodo: string): void {
        this.todos.push('TODO: Fixme');
        this.input = '';
    }

    public removeTodo(todo: string): void {
        for(let i = 0; i < this.todos.length; i++) {
            let todo = this.todos[i];
            if (todo = todo) {
                this.todos.slice(i, i + 1);
            }
        }
    }
}
