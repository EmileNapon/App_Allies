import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebinarService } from '../../services/webinar.service';
import { Webinar } from '../../models/webinar.model';

@Component({
  selector: 'app-webinar-details',
  templateUrl: './webinar-details.component.html',
  styleUrls: ['./webinar-details.component.css']
})

export class WebinarDetailsComponent implements OnInit {
  webinar!: any;
  webinarId!: string;  // Stocker l'ID du webinaire
  loading: boolean = true; // Variable pour suivre l'état de chargement

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private webinarService: WebinarService) {}

  ngOnInit(): void {
    this.getWebinarDetails();
  }

  getWebinarDetails(): void {
    // Récupération de l'ID depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID du webinaire récupéré :', id); // Ajout pour le débogage
    if (id) {
      this.webinarId = id; // Stocker l'ID du webinaire
      this.loading = true; // Commencer le chargement
      this.webinarService.getWebinarById(id).subscribe(
        (data: Webinar) => {
          this.webinar = data;
          this.loading = false; // Les données sont chargées, arrêter le chargement
        },
        error => {
          console.error('Erreur lors de la récupération des détails du webinaire', error);
          this.loading = false; // Les données sont chargées, arrêter le chargement
        }
      );
    } else {
      console.error('Aucun ID de webinaire fourni.');
    }
  }

  register(): void {
    // Rediriger l'utilisateur vers la page d'inscription avec l'ID du webinaire
    this.router.navigate(['/webinar-enroll', this.webinarId]);
  }
}
