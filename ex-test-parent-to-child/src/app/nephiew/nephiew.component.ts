import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-nephiew',
  templateUrl: './nephiew.component.html',
  styleUrls: ['./nephiew.component.css']
})
export class NephiewComponent implements OnInit {

  @Input() persone: Persona[];

  constructor() { }

  ngOnInit(): void {
  }

}
