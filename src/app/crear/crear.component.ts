import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.sass']
})
export class CrearComponent implements OnInit {
  lugar:any = {};
  id: any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    if(this.id != 'new'){
      this.lugaresService.traerLugar(this.id)
        .subscribe((lugar) => {
          this.lugar = lugar;
          // console.log(this.lugar);
        });
    }
  }

  guardarLugar() {
    const direccion = this.lugar.calle +","+ this.lugar.ciudad + "," + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
      .subscribe((result:any) => {
        this.lugar.lat = result.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
        this.lugar.lng = result.Response.View[0].Result[0].Location.DisplayPosition.Longitude;

        if (this.id != 'new' ) {
          this.lugaresService.editarLugar(this.id, this.lugar)
          alert("Negocio editado con éxito!")
        } else {
          this.lugar.date = Date.now();
          this.lugaresService.agregarLugar(this.lugar);
          alert("Negocio guardado con éxito!")
          this.lugar = {};
        }
      }
    )
  }
  ngOnInit() {
  }

}
