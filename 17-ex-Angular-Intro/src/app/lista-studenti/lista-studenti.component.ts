import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrls: ['./lista-studenti.component.css']
})
export class ListaStudentiComponent implements OnInit {
  
  studenti: {nome: string, cognome: string}[] = [
    {
      nome: "Paolo",
      cognome: "Carlini"
    },
    {
      nome: "Sofia",
      cognome: "Signa"
    },
    {
      nome: "Tamara",
      cognome: "Luna"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
