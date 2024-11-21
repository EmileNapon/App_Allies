import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificationService } from '../certification/certification-service/certificationService';
import {ServiceConnexionPrincipale  } from 'src/app/service-connexion-etudiant-principale.service';


@Component({
  selector: 'app-certification-contenu',
  templateUrl: './certification-contenu.component.html',
  styleUrls: ['./certification-contenu.component.css']
})
export class CertificationContenuComponent implements OnInit {

  Invalid: boolean = true;
  certificatId: string | null = null;

  ListCertificatChapitre: any[]=[]
  filtredCertificatChapitre:any[]=[]

  ListCertificat:any[]=[]
  filtredCertificat:any[]=[]




  //-------------------------//
  ListCertificatArticle:any[]=[]
  ListCertificatPosdcast:any[]=[]
  ListCertificatVideo:any[]=[]
  filteredCertificatsArticle:any[]=[]
  filteredCertificatsVideo:any[]=[]
  filteredCertificatPosdcast:any[]=[]
  ListArticle:any[]=[]
  filtredCertificatArticle:any[]=[]
 certificatId1: string | null = null;

  //---------------------------------//

  constructor( private CertificatService:CertificationService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.certificatId = this.route.snapshot.paramMap.get('idCertification');
    this.getCertificationChapitre()
    this.getCertification()
    this.getCertificationArticle()
   
    }

    getCertification(){
      this.CertificatService.getCertificat().subscribe(data => {
        this.ListCertificat = data;
        this.filterCertificat()
      });
    }

  getCertificationChapitre(){
    this.CertificatService.getCertificatChapitre().subscribe(data => {
      this.ListCertificatChapitre = data;
    });
  }


  filterCertificat() {
    if(this.certificatId){
      this.filtredCertificat = this.ListCertificat.filter(certificat=> certificat.id===this.certificatId);
      this.filtredCertificatChapitre = this.ListCertificatChapitre.filter(chapitre=> this.filtredCertificat.some(certificat=>chapitre.idContenuCertificat===certificat.id));
    console.log(this.filtredCertificat)
    }
  }






onSelectCertificat(idCertificationEParcours1: string): void {
  this.router.navigate([`/parcours/${idCertificationEParcours1}`]); // Redirection vers la page des matières du domaine sélectionné
}


//------------------------------------------------//
isAffiche1:boolean=false
isAffiche2:boolean=false
isAffiche3:boolean=false
isAffiche4:boolean=false

  // Gérer l'état du cours actuellement ouvert
  openCoursId: number | null = null;

  // Fonction pour ouvrir/fermer les chapitres d'un cours
  onSelectAfficherChapitre(chapitreId: number): void {
    if (this.openCoursId === chapitreId) {
      this.openCoursId = null; // Ferme les chapitres si déjà ouvert
    } else {
      this.openCoursId = chapitreId; // Ouvre les chapitres du cours sélectionné
    }
  }


getCertificationArticle(){
  this.CertificatService.getCertificatArticle().subscribe(data => {
    this.ListCertificatArticle= data;
    this.filterMatieres()
    this.getCertificationVideo()
    this.getCertificationPosdcast()
  });
}

getCertificationVideo(){
  this.CertificatService.getCertificatVideo().subscribe(data => {
    this.ListCertificatVideo= data;
    this.filterMatieres()
  });
}

getCertificationPosdcast(){
  this.CertificatService.getCertificatPodcast().subscribe(data => {
    this.ListCertificatPosdcast= data;
    this.filterMatieres()
  });
}

filterMatieres(): void {
  if (this.certificatId) {
  //  this.filtredCertificatChapitre = this.ListCertificatChapitre.filter(chapitre=> chapitre.idContenuCertificat===this.certificatId);
    this.filteredCertificatsArticle = this.ListCertificatArticle.filter(article =>this.filtredCertificatChapitre.some(chapitre=> chapitre.id === article.idChapitre));
    this.filteredCertificatsVideo = this.ListCertificatVideo.filter(video =>this.filtredCertificatChapitre.some(chapitre=> chapitre.id === video.idChapitre));
    this.filteredCertificatPosdcast = this.ListCertificatPosdcast.filter(podcast =>this.filtredCertificatChapitre.some(chapitre=> chapitre.id === podcast.idChapitre));
  }
}

//----------------------------------------------------------//





}

