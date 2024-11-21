import { Component, OnInit } from '@angular/core';
import { WebinarService } from '../../services/webinar.service';
import { Webinar } from '../../models/webinar.model';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-webinar-list',
  templateUrl: './webinar-list.component.html',
  styleUrls: ['./webinar-list.component.css']
})
export class WebinarListComponent implements OnInit {
  webinars: any[] = [];
  loading: boolean = true; // Variable pour suivre l'état de chargement

  constructor(
    // private spinner: NgxSpinnerService
    private webinarService: WebinarService,
    ) {}

  ngOnInit(): void {
    // this.spinner.show();
    this.getWebinars();
  }

  getWebinars(): void {
    this.loading = true; // Commencer le chargement
    this.webinarService.getWebinars().subscribe(
      (data: Webinar[]) => {
        this.webinars = data;
        this.loading = false; // Les données sont chargées, arrêter le chargement
        console.log('Webinaires récupérés :', this.webinars);
      },
      error => {
        console.error('Erreur lors de la récupération des webinaires', error);
        this.loading = false; // En cas d'erreur, arrêter le chargement
      }
    );
  }
}
