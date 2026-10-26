import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  public comics: Comic[];

  constructor(private _cdr: ChangeDetectorRef) {
    this.comics = [];
  }
  cargarComics(): void {
    let path = './assets/comics.json';
    fetch(path)
      .then((response) => response.json())
      .then((data: any[]) => {
        for (let element of data) {
          let comic: Comic = new Comic(element.nombre, element.imagen, element.descripcion);
          this.comics.push(comic);
        }
        this._cdr.detectChanges();
      });
  }
}
