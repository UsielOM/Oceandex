import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepagesComponent } from './homepages.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ConocenosComponent } from './Components/conocenos/conocenos.component';
import { InformateComponent } from './Components/informate/informate.component';


@NgModule({
  declarations: [
    HomepagesComponent,
    InicioComponent,
    ConocenosComponent,
    InformateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
