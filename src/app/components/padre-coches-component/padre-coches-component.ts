import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>;

  constructor(){
    this.arrayCoches=[
      new Coche('Ford','Focus',0,25),
      new Coche('Ford','Mustang',0,35),
      new Coche('Porsche','911',0,40),
      new Coche('Lamborghini','Urus',0,45),
    ]
  }
}
