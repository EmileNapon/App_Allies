import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { CoursService } from './cours-service/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{
 
  constructor(private coursService: CoursService, private route: Router,private router: ActivatedRoute) { }
  

  coursId: string | null = null;
  cours: any[] = [];
  coursFiltres: any[] = [];

  ngOnInit(): void {
    // Récupérer l'ID du domaine à partir de l'URL
    this.coursId = this.router.snapshot.paramMap.get('coursId');
    this.loadMatieres();
  }

  loadMatieres(): void {
    this.coursService.getCours().subscribe(data => {
      this.cours = data;
      console.log(this.cours)
      this.filterCours(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }
  filterCours(): void {
    if (this.coursId) {
      
      this.coursFiltres = this.cours.filter(cour => cour.module == this.coursId);
      console.log(this.coursFiltres)
    }
  }

    
  onSelectPage(idPage: number): void {
    this.route.navigate([`/page/${idPage}/pageContenu`]); // Naviguer vers la page sélectionnée
  }

}
