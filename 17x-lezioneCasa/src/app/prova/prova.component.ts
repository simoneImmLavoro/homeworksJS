import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, DoCheck, OnDestroy, OnChanges {

  @Input() data: any;

  @Output() mandaDatiEvento = new EventEmitter<string>();

  nome: string = "Simone"

  mandaDati(){
    this.mandaDatiEvento.emit(this.nome)
  }


  cani = [
    {nome: "roger",
    razza: "golden",
    descrizione: "The Shiba . A small, agile dog that copes very well, the Shiba Inu was originally bred for hunting."
    },
    {nome: "gregor",
    razza: "shiba",
    descrizione: "The Shiba Inu is the smallest of the six original and distinct spitz ."
    },
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
