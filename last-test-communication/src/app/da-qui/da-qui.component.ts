import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cose } from '../cose.model';

@Component({
  selector: 'app-da-qui',
  templateUrl: './da-qui.component.html',
  styleUrls: ['./da-qui.component.css']
})
export class DaQuiComponent implements OnInit {

  @Output() moveCose = new EventEmitter<Cose[]>();

  leMieCose: Cose[] = [
    {
      name: "banane",
      quante: 23
    },
    {
      name: "scarpe",
      quante: 12
    },
    {
      name: "righe",
      quante: 75
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.moveCose.emit(this.leMieCose)
    console.log(this.leMieCose);
    
  }

}
