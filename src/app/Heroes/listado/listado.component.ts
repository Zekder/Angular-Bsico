
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HeroeComponent } from '../Heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor','Arrow'];
  heroeBorrado: string = '';
  

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado  = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}

