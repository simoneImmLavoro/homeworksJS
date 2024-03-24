import { Component, Input, OnInit } from '@angular/core';
import { Cose } from '../cose.model';

@Component({
  selector: 'app-a-qua',
  templateUrl: './a-qua.component.html',
  styleUrls: ['./a-qua.component.css']
})
export class AQuaComponent implements OnInit {

  @Input() leMieCose: Cose[];

  constructor() { }

  ngOnInit(): void {
  }

}
