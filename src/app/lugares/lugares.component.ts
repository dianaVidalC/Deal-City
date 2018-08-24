import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.sass'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity:0,
        backgroundColor: 'green',
        transform: 'rotate3D(0,0,0,0deg)'
      })),
      state('final', style({
        opacity:1,
        backgroundColor: 'yellow',
        transform: 'rotate3D(5,10,20,30deg)'
      })),
      transition('inicial => final', animate('1000ms ease-in')),
      transition('final => inicial', animate('500ms ease-out'))
    ])
  ]
})
export class LugaresComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  title = 'deal-city';
  lugares:any;
  state= 'final'

  animar(){
    this.state = (this.state === 'final')? 'inicial': 'final';
  }
  animacionInicia (ev) {
    console.log(ev);
    console.log("Iniciado");
  }
  animacionTermina (ev) {
    console.log(ev);
    console.log("Terminado");
  }

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
