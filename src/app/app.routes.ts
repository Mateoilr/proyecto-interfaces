import { Routes } from '@angular/router';
import { Pantalla1Component } from './pages/pantalla1/pantalla1.component';
import { Pantalla2Component } from './pages/pantalla2/pantalla2.component';
import { Pantalla3Component } from './pages/pantalla3/pantalla3.component';

export const routes: Routes = [
    {
        path: 'Screen1',
        component:  Pantalla1Component
    },
    {
        path: 'Screen2',
        component:  Pantalla2Component
    },
    {
        path: 'Screen3',
        component:  Pantalla3Component
    },
    {
        path: '**',
        redirectTo: 'Screen1'
    }
];
