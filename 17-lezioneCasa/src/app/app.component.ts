import { Component } from '@angular/core';
import { Persona } from './personaModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lezione-angular';
  
  isVisible: boolean = true;

  persone: Persona[] = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "neri", isOnline: false},
    {nome: "maria", cognome: "gialli", isOnline: true}
  ]

  numero: number = 2;

  changeBoolean(){
    this.isVisible = !this.isVisible
  }

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(event: Event){
    this.title = "Ho cliccato il bottone"
  }
}
