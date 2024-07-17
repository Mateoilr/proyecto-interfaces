import { Routes } from '@angular/router';
import { Pantalla1Component } from '../components/pantalla1/pantalla1.component';
import { Pantalla2Component } from '../components/pantalla2/pantalla2.component';
import { Pantalla3Component } from '../components/pantalla3/pantalla3.component';

export const routes: Routes = [
    {
        path: 'pantalla1',
        component:  Pantalla1Component
    },
    {
        path: 'pantalla2',
        component:  Pantalla2Component
    },
    {
        path: 'pantalla3',
        component:  Pantalla3Component
    },
    {
        path: '**',
        redirectTo: '/pantalla1'
    }
];
