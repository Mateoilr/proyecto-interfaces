import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla2',
  standalone: true,
  imports: [],
  templateUrl: './pantalla2.component.html',
  styleUrl: './pantalla2.component.css'
})
export class Pantalla2Component {
constructor(private route:Router){
}

goToPantalla3(){
  this.route.navigateByUrl('/pantalla3');
  }
}
