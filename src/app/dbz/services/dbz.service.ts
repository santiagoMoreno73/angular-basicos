import { Injectable } from "@angular/core";

// interfaces
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzServices {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
    {
      nombre: 'Trunks',
      poder: 7500
    } 
  ];

  get personajes(): Personaje[] {
   return [...this._personajes]; 
  }

  constructor() {}

  agregarPersonaje( personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
