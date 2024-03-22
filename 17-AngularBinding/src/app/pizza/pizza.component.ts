import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  // pizza: Pizza;
  @Output() onPizza = new EventEmitter<Pizza>();

  nomePizza: string;
  prezzoPizza: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddPizza(){
    let nuovaPizza = new Pizza(this.nomePizza, this.prezzoPizza);
    this.onPizza.emit(nuovaPizza);
  }

}
