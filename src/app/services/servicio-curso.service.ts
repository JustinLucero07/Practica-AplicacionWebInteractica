import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursoService {

  private imageUrl = 'https://img.freepik.com/foto-gratis/arreglo-dia-educacion-mesa-espacio-copia_23-2148721266.jpg?t=st=1729471324~exp=1729474924~hmac=3b88cf06f11b58fe58cd8d222fbf06d4a47b614e28837371c7dea0f1a70ac74b&w=1380';

  constructor(private http: HttpClient) {}

  async getCurso(): Promise<string> {
    try {
      return this.imageUrl; 
    } catch (error) {
      console.error('Error fetching the image:', error);
      return '';
    }
  }
  

}

