import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', loadComponent:() => import('./pages/presentation/presentation.page').then(m => m.PresentationPage)
    },
    {
        path:'lists', loadComponent:() => import('./pages/lists/lists.page').then(m => m.ListsPage)
    }
  
];
