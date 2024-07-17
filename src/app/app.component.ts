import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Pantalla1Component } from '../components/pantalla1/pantalla1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Pantalla1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro1';
}
