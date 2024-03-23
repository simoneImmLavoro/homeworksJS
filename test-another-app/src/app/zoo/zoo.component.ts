import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  @Output() makeAnimalsList = new EventEmitter<Animal[]>();

  animals: Animal[] = [];

  nameAnimal: string;
  moveAnimal:string;

  constructor() { }

  ngOnInit(): void {
  }

  saveAnimal(){
    let newAnimal: Animal = new Animal(this.nameAnimal, this.moveAnimal);

    this.animals.push(newAnimal);

    

    this.makeAnimalsList.emit(this.animals);

  }

}
