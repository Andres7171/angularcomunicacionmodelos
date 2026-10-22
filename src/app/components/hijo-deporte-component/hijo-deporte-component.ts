import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!:string
  //@Output() mostrarFavorito:Emitter 
  public mensaje!:string

  mostrarFavorito():void{
    this.mensaje='Su deporte favorito es'+this.sport
  }
}
