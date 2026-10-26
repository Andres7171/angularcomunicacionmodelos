import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public resultado:number
  public numeros:number[]
  constructor(){
    this.resultado=0
    this.numeros=[5,8,4]
  }
  generarNumeros():void{
      let aleatorio=Math.floor((Math.random()*100)+1)
      this.numeros.push(aleatorio)
  }

  public sumarNumeroPadre(event:number):void{
    this.resultado=this.resultado+event
  }
}
