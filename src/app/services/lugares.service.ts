import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Item {
  plan: string;
  cercania: number;
  distancia: number;
  active: boolean;
  nombre: string;
  descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = this.afs.collection<Item>('lugares');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  public traerLugares () {
    return this.items;
  }
  public traerLugar (id) {
    return this.afs.collection('lugares').doc(id).valueChanges();
  }
  public agregarLugar (item: Item) {
    this.itemsCollection.add(item);
  }
  public buscarLugar (id) {
    // return this.lugares.filter((lugar) => lugar.id == id) [0] || null;
  }
  public editarLugar (id,item) {
    this.itemDoc = this.afs.doc<Item>(`lugares/${id}`)
    this.itemDoc.update(item);
  }
  public obtenerGeoData (direccion) {
    return this.http.get(`https://geocoder.api.here.com/6.2/geocode.json?searchtext=${direccion}&app_id=b7dkSpddGfBLldftS8k6&app_code=Z5fCpK9BRUSBMqkg0BNcYg`)
  }
}
