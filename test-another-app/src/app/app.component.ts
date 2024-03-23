import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-another-app';

  animals: Animal[];

  onStageAnimals(animalList: Animal[]){
    this.animals = animalList;
  }
}
