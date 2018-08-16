import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.sass']
})
export class LugaresComponent implements OnInit {
  faEdit = faEdit;
  title = 'deal-city';
  lugares:any;

  constructor(private lugaresService: LugaresService) {

    this.lugaresService.traerLugares().subscribe((elem) => {
      this.lugares = elem;
    })
  }
  ngOnInit() {
  }

}
