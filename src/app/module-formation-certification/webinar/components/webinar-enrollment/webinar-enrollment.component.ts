import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebinarService } from '../../services/webinar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebinarEnrollment } from '../../models/webinar-enrollmnet.model';

@Component({
  selector: 'app-webinar-enroll',
  templateUrl: './webinar-enrollment.component.html',
  styleUrls: ['./webinar-enrollment.component.css']
})
export class WebinarEnrollComponent implements OnInit {
  enrollForm!: FormGroup;
  webinarId!: string; // Récupéré via l'URL

  constructor(
    private fb: FormBuilder,
    private webinarService: WebinarService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    });

    // Récupération de l'ID du webinaire à partir de l'URL
    this.webinarId = this.route.snapshot.paramMap.get('id') || '';
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      // Préparer les données d'inscription sans générer d'ID ici
      const webinarEnrollment:  Omit<WebinarEnrollment, 'id'> = {
        webinarId: this.webinarId,
        fullName: this.enrollForm.value.fullName,
        email: this.enrollForm.value.email,
        registrationDate: new Date(),
        hasAcceptedTerms: this.enrollForm.value.acceptTerms,
        isConfirmed: true, // Confirmation de l'inscription
        paymentStatus: 'free', // Exemples de valeurs par défaut (ajustables selon le cas)
      };

      console.log(webinarEnrollment);
      
      // Enregistrer via le service
      this.webinarService.enrollToWebinar(webinarEnrollment).subscribe({
        next: (response) => {
          this.snackBar.open('Inscription réussie', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          this.router.navigate(['/webinar-list']);
        },
        error: (err) => {
          this.snackBar.open('Échec de l\'inscription', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }
      });
    }
  }
}
