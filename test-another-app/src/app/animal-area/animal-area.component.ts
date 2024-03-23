import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-area',
  templateUrl: './animal-area.component.html',
  styleUrls: ['./animal-area.component.css']
})
export class AnimalAreaComponent implements OnInit {

  @Input() animals: Animal[];

  constructor() { }

  ngOnInit(): void {
  }

}
