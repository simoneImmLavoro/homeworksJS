import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, DoCheck, OnDestroy, OnChanges {

  @Input() data: any;


  cani = [
    {nome: "roger",
    razza: "golden",
    descrizione: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
  }
  ]

  constructor() {    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngAfterViewInit(): void {
  }
  ngAfterContentChecked(): void {
  }
  ngAfterContentInit(): void {
  }
  ngAfterViewChecked(): void {
  }
  ngDoCheck(): void {
  }
  ngOnDestroy(): void {
  }


  ngOnInit(): void {
    console.log(this.data);
    
  }

}
