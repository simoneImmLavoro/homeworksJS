import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from './pizza/pizza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2-binding';

  listaPizze: Pizza[] = [];
  // @Output() pizzaAggiunta = new EventEmitter<Pizza>();
  @Output() pizzaAggiunta = new EventEmitter<Pizza>();


  onPrendiPizza(pizza: Pizza){
    this.listaPizze.push(pizza)
    
    console.log(this.listaPizze);
  }

}
