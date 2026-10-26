import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!:string
  @Output() seleccionarFavoritoPadre:EventEmitter<any>=new EventEmitter() //en el any se puede poner string en este caso
  public mensaje!:string

  mostrarFavorito():void{
    this.seleccionarFavoritoPadre.emit(this.sport)
  }
}
