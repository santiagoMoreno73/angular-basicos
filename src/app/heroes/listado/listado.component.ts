import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
 heroeBorrado: string = '';

 // método
 borrarHeroe() {
   console.log("borrando ...");
   this.heroeBorrado = this.heroes.pop() || '';
  }
}
