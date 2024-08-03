import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path:"",
        component:LandingComponent
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"SignIn",
        component:SignInComponent
    }
];
