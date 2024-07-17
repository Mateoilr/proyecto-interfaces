import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pantalla1Component } from '../components/pantalla1/pantalla1.component';
import { Pantalla2Component } from '../components/pantalla2/pantalla2.component';
import { Pantalla3Component } from '../components/pantalla3/pantalla3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pantalla1Component, Pantalla2Component,Pantalla3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro1';
}
