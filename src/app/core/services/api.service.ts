import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Creyente } from '../models/creyente';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion';
import { ComentarioDto } from '../models/comentario-dto';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  //creyentes
  registrarCreyentes(creyente: Creyente): Observable<Creyente> {
    return this.http.post<Creyente>(this.apiUrl+"/creyentes/signin", creyente);
  }

  obtenerCreyentePorEmail(email: string): Observable<Creyente> {
    return this.http.get<Creyente>(this.apiUrl+"/creyentes/"+email);
  }

  obtenerTodosCreyentes(): Observable<Creyente[]>{
    return this.http.get<Creyente[]>(this.apiUrl+"/creyentes/")
  }

  //publicaciones
  crearPublicacion(publicacion: Publicacion): Observable<Publicacion>{
    return this.http.post<Publicacion>(this.apiUrl+"/publicaciones/",publicacion);
  }

  obtenerPublicaciones(): Observable<Publicacion[]>{
    return this.http.get<Publicacion[]>(this.apiUrl+"/publicaciones/");
  }

  obtenerPublicacionId(id: number): Observable<Publicacion>{
    return this.http.get<Publicacion>(this.apiUrl+"/publicaciones/"+id);
  }

  //comentarios
  crearComentario(comentarioDTO: ComentarioDto): Observable<Comentario>{
    return this.http.post<Comentario>(this.apiUrl+"/comentarios/comentar",comentarioDTO);
  }

  eliminarComentario(id: number): Observable<string>{
    return this.http.delete<string>(this.apiUrl+"/comentarios/comentario/"+id);
  }

  obtenerComentariosPorPublicacion(publicacionId: number): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.apiUrl+"/comentarios/publicacion/"+publicacionId);
  }
}
