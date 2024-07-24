import { Component } from '@angular/core';
import { TitleComponent } from '../../../components/title/title.component';
import { Button2Component } from '../../../components/button2/button2.component';

@Component({
  selector: 'app-pantalla2',
  standalone: true,
  imports: [TitleComponent,Button2Component],
  templateUrl: './pantalla2.component.html',
  styleUrl: './pantalla2.component.css'
})
export class Pantalla2Component {
}
