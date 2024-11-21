import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionnaireChapitreServiceService } from './gestionnaire_chapitre/gestionnaire-chapitre-service.service';

import DOMPurify from 'dompurify';
@Component({
  selector: 'app-gestionnaire-chapitre',
  templateUrl: './gestionnaire-chapitre.component.html',
  styleUrls: ['./gestionnaire-chapitre.component.css']
})
export class GestionnaireChapitreComponent implements OnInit {

  constructor(private chapitreService: GestionnaireChapitreServiceService,  private fb: FormBuilder, private router: ActivatedRoute, private route:Router) { }
  selectedChapitreIndex:string=""
  __iconDelete__:boolean=false
  __iconVoirChapitre__:boolean= false
  __addChapitre__:boolean=false

  ondelete():void{
    this.__iconDelete__=!this.__iconDelete__
    this.__iconVoirChapitre__=false
  }




  onVoirChapitre():void{
    this.__iconVoirChapitre__=!this.__iconVoirChapitre__
    this.__iconDelete__=false
  }


  selecterchapitre(chapitre:string){
    this.__iconVoirChapitre__=true
    this.__iconDelete__=false
    this.selectedChapitreIndex=chapitre
      
  }

  OnAdd():void{
    this.__addChapitre__=!this.__addChapitre__
    this.__iconDelete__=false
    this.__iconVoirChapitre__= false
  }


  idcoursGestionnaireId: string | null = null;
  __chapitreGestionnaire__: any[] = [];
  __filteredChapitresGestionnaire__: any[] = [];
 
  
  
  ngOnInit(): void {
    this.idcoursGestionnaireId = this.router.snapshot.paramMap.get('idcoursGestionnaireId');
    this.loadCoursgestionnaire();
    this.InitFormCours()
    this.loadContenu()

    ///////////////////////////

    this.InitFormCours();
    this.loadCoursgestionnaire();
  }
  




/////////////////////////////////////////////////////////











  loadCoursgestionnaire(): void {
    this.chapitreService.getChapitre().subscribe(data => {
      this.__chapitreGestionnaire__ = data;
      this.filterMatieresGestionnaire()
      console.log( this.idcoursGestionnaireId)
    });
  }



  filterMatieresGestionnaire(): void {
    if (this.idcoursGestionnaireId) {
      this.__filteredChapitresGestionnaire__ = this.__chapitreGestionnaire__.filter(chapitre => chapitre.cours == this.idcoursGestionnaireId);
    }
  }








  chapitreForm!: FormGroup;

  InitFormCours(): void {
    this.chapitreForm = this.fb.group({ 
      titre: '',
      sous_titre:'',
      description: '',
    });
  }


  ajouterNouvelleMatiere(matiereNom: string): void {
    if (this.idcoursGestionnaireId) {
    const nouvelleMatiere = {
        // Le nom ou autre attribut de la nouvelle matière
        cours: this.idcoursGestionnaireId,  // Associer la matière au domaine sélectionné
        titre:matiereNom,
    }
    

      this.chapitreService.addChapitre(nouvelleMatiere).subscribe(response => {
        console.log('Nouvelle matière ajoutée avec succès', response);
        
        // Optionnel : Actualiser la liste des matières après ajout
        this.filterMatieresGestionnaire();
      });
    } else {
      console.error('Aucun domaine sélectionné');
    }



    ////////////////////////////////////////////////////////////////////




    
  }
  





 

  onSubmit(){
    const titre= this.chapitreForm.value.titre;
    console.log(titre)
    this.ajouterNouvelleMatiere(titre)
    this.loadCoursgestionnaire()
    this.OnAdd();
   
  }








  Contenus:any[]=[]
  ContenusFiltres:any[]=[]
  loadContenu(): void {
    this.chapitreService.getcontenu().subscribe(data => {
      this.Contenus = data;
      this.filterContenu(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }

  filterContenu(): void {    
      this.ContenusFiltres = this.Contenus.filter(contenu => this.__filteredChapitresGestionnaire__.some(chapitre=>chapitre.id==contenu.chapitre))
      .map(contenu => {
        // Supprimer les balises <p> et </p> avant la sanitisation
        const descriptionSansP = contenu.description.replace(/<\/?p>/g, '');
        const sous_titreSansP = contenu.sous_titre.replace(/<\/?p>/g, '');
        return {
          ...contenu,sous_titre:DOMPurify.sanitize(sous_titreSansP),
          description: DOMPurify.sanitize(descriptionSansP)
        };
      });
   




  }



  onSelectgestionnaireCours(chapitreGestionnaireId: string): void {
    this.route.navigate([`/gestionnaire/${chapitreGestionnaireId}/gestionnaire-contenu`]); 

  }
}
