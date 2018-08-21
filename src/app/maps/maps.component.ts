import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

const H = window['H'];

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.sass']
})
export class MapsComponent implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;

  map: any;
  lugares:any;

  constructor(private lugaresServices: LugaresService){
    this.lugaresServices.traerLugares().subscribe((lugares) =>{
      this.lugares = lugares;
      this.lugares.forEach(lugar => {
      console.log(lugar);
      const marker = new H.map.Marker({lat: lugar.lat, lng: lugar.lng});
      this.map.addObject(marker);
    });

    });
  }
  ngOnInit() {
    this.map = this.initializeMap();
  }
  initializeMap() {
    const platform = new H.service.Platform({
      app_id: 'b7dkSpddGfBLldftS8k6',
      app_code: 'Z5fCpK9BRUSBMqkg0BNcYg',
      useCIT: true,
      useHTTPS: true
    });
    const pixelRatio = window.devicePixelRatio || 1;
    const defaultLayers = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });

    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10.6,
        center: { lat: -12, lng: -77}
      }
    );
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    return map;
  }
}
