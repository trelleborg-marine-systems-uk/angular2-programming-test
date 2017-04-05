import { Routes } from '@angular/router';

// Root Components
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add-component/add-component.component';
import { ReviewComponent } from './review-component/review-component.component';
import { FixComponent } from './fix-component/fix-component.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'test-1', component: AddComponent },
    { path: 'test-2', component: FixComponent },
    { path: 'test-3', component: ReviewComponent },
    { path: '**', component: HomeComponent }
];
