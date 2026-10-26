import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros-component',
  standalone: false,
  styleUrl: './hijo-numeros-component.css',
  templateUrl: './hijo-numeros-component.html',
})
export class HijoNumerosComponent {
  @Input() num!:number
  @Output() sumarNumeroPadre:EventEmitter<number>=new EventEmitter()
  constructor(){}

  public sumarNumero(){
    this.sumarNumeroPadre.emit(this.num)
  }
}
