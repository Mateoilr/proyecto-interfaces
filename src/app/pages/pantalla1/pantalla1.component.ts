import { Component } from '@angular/core';
import { TitleComponent } from '../../../components/title/title.component';
import { Button1Component } from '../../../components/button1/button1.component';

@Component({
  selector: 'app-pantalla1',
  standalone: true,
  imports: [TitleComponent, Button1Component],
  templateUrl: './pantalla1.component.html',
  styleUrl: './pantalla1.component.css'
})
export class Pantalla1Component {

}
