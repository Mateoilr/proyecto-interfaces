import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla1',
  standalone: true,
  imports: [],
  templateUrl: './pantalla1.component.html',
  styleUrl: './pantalla1.component.css'
})
export class Pantalla1Component {
  constructor(private route:Router){

  }

  goToPantalla2(){
    this.route.navigateByUrl('/pantalla2');
  }
}
