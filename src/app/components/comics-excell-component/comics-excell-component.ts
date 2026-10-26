import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-comics-excell-component',
  standalone: false,
  styleUrl: './comics-excell-component.css',
  templateUrl: './comics-excell-component.html',
})
export class ComicsExcellComponent {
  public comics: Comic[];

  constructor(private _cdr: ChangeDetectorRef) {
    this.comics = [];
  }

  cargarComics(): void {
    let path = './assets/comics.xlsx';
    fetch(path)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        let workbook = XLSX.read(buffer, { type: 'array' });
        let hojaName = workbook.SheetNames[0];
        let hoja=workbook.Sheets[hojaName]
        let data=XLSX.utils.sheet_to_json(hoja)
        console.log(data)
        this.comics=data.map((comic:any)=> new Comic (comic.nombre, comic.imagen,comic.descripcion))
        this._cdr.detectChanges()
      });
  }
}
