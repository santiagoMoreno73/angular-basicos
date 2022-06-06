import { Component, Input } from '@angular/core';

// interface
import { Personaje } from '../interfaces/dbz.interface';

// services
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzServices){}
}
