import { Component, Input, OnInit } from '@angular/core';
import { Webinar } from '../../models/webinar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {


  webinaire = {
    theme: "L'intelligence artificielle au service du comptable",
    date: "Samedi 23 Novembre 2024",
    heure: "À partir de 10h00",
    formateur: {
      nom: "Anthony Nebie",
      role: "Web Entrepreneur",
      imageUrl: "https://via.placeholder.com/120"
    },
    moderatrice: {
      nom: "Massogolo Latifah Sanogo",
      role: "Auditrice Comptable et Financière",
      imageUrl: "https://via.placeholder.com/120"
    },
    logos: {
      fidalli: "https://via.placeholder.com/150",
      googleMeet: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Google_Meet_logo_2020.svg/1024px-Google_Meet_logo_2020.svg.png",
      alliance: "https://via.placeholder.com/150",
      futurallies: "https://via.placeholder.com/150"
    },
    contacts: {
      email: "infos@fidalli-ec.com",
      whatsapp: "+226 72 77 69 69"
    }
  };





  @Input() webinar!: any; // Recevoir les données du webinaire en tant qu'entrée

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Webinaire reçu dans WebinarComponent:', this.webinar);
    console.log('Titre du webinaire reçu :', this.webinar.title);
  
    if (!this.webinar || !this.webinar._id) {
      console.error("Le webinaire n'a pas été correctement chargé ou l'ID (_id) est manquant.");
    } else {
      console.log('ID du webinaire reçu (_id) :', this.webinar._id);
    }
  }
  




  
}

interface Webinaire {
  theme: string;
  date: string;
  heure: string;
  formateur: {
      nom: string;
      role: string;
      imageUrl: string;
  };
  moderatrice: {
      nom: string;
      role: string;
      imageUrl: string;
  };
  logos: {
      fidalli: string;
      googleMeet: string;
      alliance: string;
      futurallies: string;
  };
  contacts: {
      email: string;
      whatsapp: string;
  };
}
