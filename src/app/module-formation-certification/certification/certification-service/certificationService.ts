import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
 
 

export class CertificationService {

  ListCertificat:any[]=[]
  private ContenuCertificatUrl = 'http://localhost:9999/ContenuCertificat';
  private ChapitreUrl = 'http://localhost:9999/Chapitre';
  private ArticleUrl = 'http://localhost:9999/Article';
  private VideoUrl = 'http://localhost:9999/Video';
  private PodcastUrl = 'http://localhost:9999/Podcast';
  
constructor( private http: HttpClient ) { }

getCertificat(): Observable<any[]> {
  return this.http.get<any[]>(this.ContenuCertificatUrl);
}

getCertificatChapitre() : Observable<any[]>{
  return this.http.get<any[]>(this.ChapitreUrl); 
}

getCertificatArticle() : Observable<any[]>{
  return this.http.get<any[]>(this.ArticleUrl); 
}

getCertificatVideo() : Observable<any[]>{
  return this.http.get<any[]>(this.VideoUrl); 
}

getCertificatPodcast() : Observable<any[]>{
  return this.http.get<any[]>(this.PodcastUrl); 
}


}