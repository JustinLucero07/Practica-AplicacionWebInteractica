import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursoService {

  constructor(private http: HttpClient) {}

  // Función para obtener una imagen aleatoria de perro
  async getFotoPerro2(): Promise<any> {
    try {
      const data = await firstValueFrom(this.http.get<any>('https://dog.ceo/api/breeds/image/random'));
      return data.message; // Devuelve la URL de la imagen del perro
    } catch (error) {
      console.error('Error al obtener la imagen del perro:', error);
      return '';
    }
  }

}

