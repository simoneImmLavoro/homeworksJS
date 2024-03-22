import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex-test-parent-to-child';

  parentMessage: string = "This is your heritage";

  numbersArray: number[] = [23, 546, 54, 87, 12, 91];

  personeArray: Persona[] = [
    {
      nome: "Pippo",
      cognome: "Peppo",
      eta: 35
    },
    {
      nome: "Franco",
      cognome: "Franchi",
      eta: 45
    },
    {
      nome: "Carla",
      cognome: "Carli",
      eta: 23
    },
    {
      nome: "Gianni",
      cognome: "Gianno",
      eta: 56
    },
  ]

}
