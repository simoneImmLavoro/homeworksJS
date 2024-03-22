import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-lista-pizze',
  templateUrl: './lista-pizze.component.html',
  styleUrls: ['./lista-pizze.component.css']
})
export class ListaPizzeComponent implements OnInit {

  @Input() listaPizze: Pizza[];

  constructor() { }

  ngOnInit(): void {
  }

  aggiungiPizza(pizza: Pizza): void {
    this.listaPizze.push(pizza);
    console.log('Aggiunta pizza:', pizza); 
  }
}