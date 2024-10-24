import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { ModuleFormationCertificationComponent } from './module-formation-certification.component';
import { ContenuLibreComponent } from './contenu-libre/contenu-libre.component';
import { CertificationComponent } from './certification/certification.component';

import { CoursComponent } from './cours/cours.component';
import { AcceuilFormationComponent } from './acceuil-formation/acceuil-formation.component';
import { ModuleComponent } from './domaines-listes/domaines.component';



import { CertificationContenuComponent } from './certification-contenu/certification-contenu.component';
import { certificationContenuParcours1Component } from './certification-contenu_etape_1/certificationContenuEtape';


import { HeaderFormationComponent } from '../header-footer/header-formation/header-formation.component';
import { WebinarComponent } from './webinar/components/webinar/webinar.component';
import { WebinarListComponent } from './webinar/components/webinar-list/webinar-list.component';
import { WebinarDetailsComponent } from './webinar/components/webinar-details/webinar-details.component';
import { WebinarEnrollComponent } from './webinar/components/webinar-enrollment/webinar-enrollment.component';
import { WebinarManagementComponent } from './webinar/components/webinar-management/webinar-management.component';
import { ChapitreComponent } from './chapitre/chapitre.component';


@NgModule({
  declarations: [
    ModuleFormationCertificationComponent,
    ContenuLibreComponent,
    CertificationComponent,

    CoursComponent,
    AcceuilFormationComponent, ModuleComponent, 
    CertificationContenuComponent,
    certificationContenuParcours1Component,
    HeaderFormationComponent,WebinarComponent,
    WebinarListComponent,
    WebinarDetailsComponent,
    WebinarEnrollComponent,
    WebinarManagementComponent,
    ChapitreComponent 
  ],
  imports: [
    CommonModule, ReactiveFormsModule,  HttpClientModule, RouterModule, FormsModule,ReactiveFormsModule, 
  ]
})
export class ModuleFormationCertificationModule { }
