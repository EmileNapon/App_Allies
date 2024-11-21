import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ChapitreService } from './chapitre-service/chapitre.service';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {

  constructor(private chapitreService: ChapitreService, private route: Router,private router: ActivatedRoute) { }
  

  chapitreId: string | null = null;
  chapitre: any[] = [];
  chapitreFiltres: any[] = [];

  ngOnInit(): void {
    // Récupérer l'ID du domaine à partir de l'URL
    this.chapitreId = this.router.snapshot.paramMap.get('chapitreId');
    this.loadChapitres();
    this.loadContenu()
  }

  loadChapitres(): void {
    this.chapitreService.getChapitre().subscribe(data => {
      this.chapitre = data;
      this.filterChapitre(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }
  filterChapitre(): void {
    if (this.chapitreId) {  
      this.chapitreFiltres = this.chapitre.filter(chapitre => chapitre.cours == this.chapitreId);
    }
  }

    


  Contenus:any[]=[]
  ContenusFiltres:any[]=[]
  loadContenu(): void {
    this.chapitreService.getContenu().subscribe(data => {
      this.Contenus = data;
      this.filterContenu(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }

  filterContenu(): void {    
      this.ContenusFiltres = this.Contenus.filter(contenu => this.chapitreFiltres.some(chapitre=>chapitre.id==contenu.chapitre));
      console.log(this.ContenusFiltres)
  }
}
