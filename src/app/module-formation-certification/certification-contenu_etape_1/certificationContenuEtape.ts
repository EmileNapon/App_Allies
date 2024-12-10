import { Component, Input, OnInit } from "@angular/core";
import { CertificationService } from "../certification/certification-service/certificationService";
import { ActivatedRoute, Router } from "@angular/router";
import DOMPurify from 'dompurify';

@Component({
    selector:'app-certificationContenuEtape',
    templateUrl:'./certificationContenuEtape.html',
    styleUrls:['./certificationContenuEtape.css']
})

export class certificationContenuParcours1Component implements OnInit{

    // constructor( private CertificatService:CertificationService,  private router: Router, private route: ActivatedRoute){}
  
  //   ListCertificatArticle:any[]=[]
  //   ListCertificatPosdcast:any[]=[]
  //   ListCertificatVideo:any[]=[]
  //   filteredCertificatsArticle:any[]=[]
  //   filteredCertificatsVideo:any[]=[]
  //   filteredCertificatPosdcast:any[]=[]
  //   ListArticle:any[]=[]
  //   filtredCertificatArticle:any[]=[]
  //   certificatId: string | null = null;


  //   Invalid: boolean = true;
  
  
  //   ListCertificatChapitre: any[]=[]
  //   filtredCertificatChapitre:any[]=[]
  
  //   ListCertificat:any[]=[]
  //   filtredCertificat:any[]=[]
  
  
  
  
  //   //-------------------------//
   
  //  certificatId1: string | null = null;
  
  //   //---------------------------------//






  Invalid: boolean = true;
  certificatId: string | null = null;

  // ListCertificatChapitre: any[]=[]
  filtredCertificatCours:any[]=[]

  ListCertificat:any[]=[]
  filtredCertificat:any[]=[]

  coursUseCertification: any[]=[]
  filtreCoursUseCertification: any[]=[]

  cours: any[] = [];
  options: any[]=[]

  ListCertificatChapitre:any[]=[]
  filtreListCertificatChapitre:any[]=[]
  certificatContenu:any[]=[]
  filtrecertificatContenu:any[]=[]
  currentIndex = 0;


// declaration des variables de question-response

questions: any[] = [];
filtreQuestion:any[]=[]
reponses: { question: number; choix: number }[] = [];
  //-------------------------//
  // ListCertificatArticle:any[]=[]
  // ListCertificatPosdcast:any[]=[]
  // ListCertificatVideo:any[]=[]
  // filteredCertificatsArticle:any[]=[]
  // filteredCertificatsVideo:any[]=[]
  // filteredCertificatPosdcast:any[]=[]
  // ListArticle:any[]=[]
  // filtredCertificatArticle:any[]=[]
 certificatId1: string | null = null;

  //---------------------------------//

  constructor( private CertificatService:CertificationService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.certificatId = this.route.snapshot.paramMap.get('idCertificationEParcours1');
    this.getCertification()
    this.getCoursUseCertification()
    
    // this.getCertificationChapitre()
    // this.getCertificationArticle()
    
    // this.getCertificationContenu()
    this.CertificatService.getCoursUseCertification().subscribe(data => {
      this.coursUseCertification = data;
    });
    
}

    //liste certificats recuperation

    getCertification():void{
      this.CertificatService.getCertificat().subscribe(data => {
        this.ListCertificat = data;
        this.filtredCertificat = this.ListCertificat.filter(certificat=> certificat.id==this.certificatId);
      });

    }
   
    getCoursUseCertification(){
      this.CertificatService.getCoursUseCertification().subscribe(data => {
        this.coursUseCertification = data;
        this.filtreCoursUseCertification = this.coursUseCertification.filter(coursUseCertification=> coursUseCertification.certification==this.certificatId);
        this.CertificatService.getCours().subscribe(data => {
          this.cours = data;
          this.filtredCertificatCours = this.cours.filter(cours=> this.filtreCoursUseCertification.some(filtreCoursUseCertification=>filtreCoursUseCertification.cours==cours.id));
  this.getCertificationChapitre()
        });
        
      });
     
    }
    getCertificationChapitre(){
      this.CertificatService.getChapitre().subscribe(data => {
        this.ListCertificatChapitre = data;
        this.filtreListCertificatChapitre = this.ListCertificatChapitre.filter(chapitre=> this.filtredCertificatCours.some(filtredCertificatCours=>filtredCertificatCours.id==chapitre.cours));
  
  
        this.CertificatService.getContenu().subscribe(data => {
          this.certificatContenu = data;
          this.filtrecertificatContenu = this.certificatContenu.filter(contenu=> this.filtreListCertificatChapitre.some(filtreListCertificatChapitre=>filtreListCertificatChapitre.id==contenu.chapitre))
          //this.filtrecertificatContenu = this.certificatContenu.filter(contenu=>contenu.chapitre==this.certificatId)
          .map(contenu => {
            // Supprimer les balises <p> et </p> avant la sanitisation
            const descriptionSansP = contenu.description.replace(/<\/?p>/g, '');
            const sous_titreSansP = contenu.sous_titre.replace(/<\/?p>/g, '');
           
  
            return {
              ...contenu,sous_titre:DOMPurify.sanitize(sous_titreSansP),
              description: DOMPurify.sanitize(descriptionSansP)
            };
          });
          console.log('pppppppp',this.filtrecertificatContenu) 

          // Assurez-vous que les questions sont bien associées
          this.CertificatService.getQuestion().subscribe(data => {
            this.questions = data
            console.log('|||||||||||||||||||||||||||||||||||||', this.filtreListCertificatChapitre)  
            //this.filtreQuestion= this.questions.filter(question=>question.id==this.certificatId)
            this.filtreQuestion= this.questions.filter(question=>this.filtreListCertificatChapitre.some(chapitre=>chapitre.id==question.chapitre))
            console.log('|||||||||||||||||||||||||||||||||||||', this.certificatId)  
            this.CertificatService.getOption().subscribe(data => {
              this.options = data
              console.log('|||||||||||||||||||||||||||||||||||||', this.filtreQuestion,'................')  

            });
  
          });

        

        });
      });
  
      
    }

        // chargement des questions et reponse

        selectOption(questionId: number, optionId: number): void {
          const index = this.reponses.findIndex(r => r.question === questionId);
          if (index !== -1) {
            this.reponses[index].choix = optionId;
          } else {
            this.reponses.push({ question: questionId, choix: optionId });
          }
          console.log('nnnnnnnnnnnnnnnnnnnnnnnn',this.reponses)
        }
      
        submitReponses(): void {
          this.CertificatService.submitReponses(this.reponses).subscribe(result => {
            alert(`Taux de succès : ${result.tauxDeSucces}%`);
          });
        }




    // Contenus:any[]=[]
    // ContenusFiltres:any[]=[]
    // loadContenu(): void {
    //   this.CertificatService.getContenu().subscribe(data => {
    //     this.Contenus = data;
    //     this.filterContenu(); // Filtrer les matières en fonction de l'ID du domaine
    //   });
    // }
  
    // filterContenu(): void {    
    //     this.ContenusFiltres = this.Contenus.filter(contenu => this.filtreListCertificatChapitre.some(chapitre=>chapitre.id==contenu.chapitre))
    //     .map(contenu => {
    //       // Supprimer les balises <p> et </p> avant la sanitisation
    //       const descriptionSansP = contenu.description.replace(/<\/?p>/g, '');
    //       const sous_titreSansP = contenu.sous_titre.replace(/<\/?p>/g, '');
    //       return {
    //         ...contenu,sous_titre:DOMPurify.sanitize(sous_titreSansP),
    //         description: DOMPurify.sanitize(descriptionSansP)
    //       };
    //     });}
     

  //   ngOnInit(): void {
  //     this.certificatId = this.route.snapshot.paramMap.get('idCertificationEParcours1');
  //     this.certificatId1 = this.route.snapshot.paramMap.get('idCertification');
  //             this.getCertificationArticle()
  //             this.getCertificationVideo()
  //             this.getCertificationPosdcast()
  //             this.getCertificationChapitre()
  //             this.getCertification()  
  // }








    // getCertificationArticle(){
    //     this.CertificatService.getCertificatArticle().subscribe(data => {
    //       this.ListCertificatArticle= data;
    //       this.filterMatieres()

    //     });
    //   }

    //   getCertificationVideo(){
    //     this.CertificatService.getCertificatVideo().subscribe(data => {
    //       this.ListCertificatVideo= data;
    //       this.filterMatieres()
    //     });
    //   }

    //   getCertificationPosdcast(){
    //     this.CertificatService.getCertificatPodcast().subscribe(data => {
    //       this.ListCertificatPosdcast= data;
    //       this.filterMatieres()
    //     });
    //   }

    //   filterMatieres(): void {
    //     if (this.certificatId) {
    //       this.filteredCertificatsArticle = this.ListCertificatArticle.filter(article => article.idChapitre === this.certificatId);
    //       this.filteredCertificatsVideo = this.ListCertificatVideo.filter(video => video.idChapitre === this.certificatId);
    //       this.filteredCertificatPosdcast = this.ListCertificatPosdcast.filter(podcast => podcast.idChapitre === this.certificatId);
    //     }
    //   }





    
        //---------------------------//
    
      //   getCertification(){
      //     this.CertificatService.getCertificat().subscribe(data => {
      //       this.ListCertificat = data;
      //       this.filterCertificat()
      //     });
      //   }
    
      // getCertificationChapitre(){
      //   this.CertificatService.getCertificatChapitre().subscribe(data => {
      //     this.ListCertificatChapitre = data;
      //   });
      // }


      
      // filterCertificat() {
      //   if(this.certificatId){
      //     console.log(this.certificatId)
      //     this.filtredCertificatChapitre = this.ListCertificatChapitre.filter(chapitre =>chapitre.id===this.certificatId);
      //     this.filtredCertificat = this.ListCertificat.filter(certificat=> this.filtredCertificatChapitre.some(chapitre=>chapitre.idContenuCertificat===certificat.id)); 

      //   }
      // }

//       onSelectPage(idPage: number): void {
//         this.router.navigate([`/page/${idPage}/pageContenu`]); // Naviguer vers la page sélectionnée
//       }


//       //--------------------------------------------////

//       idPage: number = 1;
//       content: any;
    
//       // Contenus des pages
//       pagesContent: { [key: number]: { title: string, videoSrc: string, article: string, question: string, options: string[], correctAnswer: string } } = {
//         1: {
//           title: 'Page 1',
//           videoSrc: 'assets/video1.mp4',
//           article: 'Ceci est un article sur Angular pour la page 1.',
//           question: 'Quel est le langage de programmation utilisé pour Angular?',
//           options: ['JavaScript', 'Python', 'Java', 'C#'],
//           correctAnswer: 'JavaScript'
//         },
//         2: {
//           title: 'Page 2',
//           videoSrc: 'assets/video2.mp4',
//           article: 'Ceci est un article sur Angular pour la page 2.',
//           question: 'Quel est le framework CSS le plus utilisé avec Angular?',
//           options: ['Bootstrap', 'Tailwind', 'Foundation', 'Bulma'],
//           correctAnswer: 'Bootstrap'
//         },
//         10: {
//           title: 'Page 10',
//           videoSrc: 'assets/video10.mp4',
//           article: 'Ceci est un article sur Angular pour la page 10.',
//           question: 'Quel est l’outil de développement utilisé pour Angular?',
//           options: ['Angular CLI', 'npm', 'yarn', 'webpack'],
//           correctAnswer: 'Angular CLI'
//         }
//       };
    
//       selectedOption: string | null = null;
    
  
    

    
//       submitAnswer(): void {
//         if (this.selectedOption === this.content.correctAnswer) {    
//           // Incrémenter l'idPage et rediriger vers la page suivante
//           const nextPage = this.idPage + 1;
          
//           if (this.pagesContent[nextPage]) { // Si la page suivante existe
//             this.router.navigate([`/page/${nextPage}/pageContenu`]);
//           } 
//       }}



nextChapter() {
  if (this.currentIndex < this.filtreListCertificatChapitre.length - 1) {
    this.currentIndex++;
  }
}

// Obtenir le chapitre actuel
get currentChapitre() {
  return this.filtreListCertificatChapitre[this.currentIndex];
}

prevChapter() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}
 }
