import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from './personaModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'lezione-angular';
  
  isVisible: boolean = true;

  persone: Persona[] = [
    {nome: "luca", cognome: "rossi", isOnline: true, color: "red"},
    {nome: "marco", cognome: "neri", isOnline: false, color: "green"},
    {nome: "maria", cognome: "gialli", isOnline: true, color: "purple"}
  ]

  // onClick(){
  //   this.persone = [
  //     {nome: "Franco", cognome: "rossi", isOnline: true, color: "red"},
  //     {nome: "Gigi", cognome: "neri", isOnline: false, color: "green"},
  //     {nome: "Alana", cognome: "gialli", isOnline: true, color: "purple"}
  //   ]
  // }

  numero: number = 2;

  changeBoolean(){
    this.isVisible = !this.isVisible
  }

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }

  // onClick(event: Event){
  //   this.title = "Ho cliccato il bottone"
  // }

  onRiceviDati(nome: string){
    console.log(nome);
    
  }

  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.inputSaluti);
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputSaluti);
  }

  onClick(){
    console.log(this.inputSaluti.nativeElement.value);
  }

  colore: string =''

  cambiaColoreEvidenziatore(colore: string){
    this.colore = colore;
  }
}
