import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-cliks.directive';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarComponent } from './editar/editar.component';


const appRoutes: Routes = [

  {path:"", component: LugaresComponent},
  {path:"lugares/", component: LugaresComponent},
  {path:"detalle/:id", component: DetalleComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"crear/:id", component: CrearComponent},
  {path:"editar", component: EditarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
