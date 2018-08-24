import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.sass']
})
export class LugaresComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  title = 'deal-city';
  lugares:any;

  constructor(private lugaresService: LugaresService) {

    this.lugaresService.traerLugares()
    .subscribe((elem) => {
      this.lugares = elem;
    },error => {
      console.log(error);
      alert(`Estamos teniendo dificultades, disculpe las molestias. Error:${error.statusText}`)
    })
  }
  eliminar (item) {
    this.lugaresService.borrarLugar(item.id)
  }
  ngOnInit() {
  }

}
