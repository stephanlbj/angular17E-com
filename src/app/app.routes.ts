import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Routes = [
   
    { path:'',component:MainComponent },
    {path:'cart', component:CartComponent},
    { path:'login', component:AuthComponent },
    {path:'success',component:SuccessComponent}, 
    {path:'canceled',component:CancelComponent},
    { path: '**', component: PageNotFoundComponentComponent },
];

