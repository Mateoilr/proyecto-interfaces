import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button2',
  standalone: true,
  imports: [],
  templateUrl: './button2.component.html',
  styleUrl: './button2.component.css'
})
export class Button2Component {
  constructor(private route:Router){

  }

  goToPantalla3(){
    this.route.navigateByUrl('/Screen3');
  }

}
