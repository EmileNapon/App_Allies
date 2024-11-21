import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrientationsComponent } from './orientations.component';
import { OrientationAcceuilComponent } from './orientation-acceuil/orientation-acceuil.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrientationsComponent,EtablissementsComponent, OrientationAcceuilComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class OrientationsModule { }
