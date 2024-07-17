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
  constructor(private router: Router) {}

  pant3(){
    this.router.navigate(['/pantalla3']);
  }

}
