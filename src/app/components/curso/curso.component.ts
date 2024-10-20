import { Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioCursoComponent } from '../formulario-curso/formulario-curso.component';
import { RouterModule } from '@angular/router';
import { ServicioCursoService } from '../../services/servicio-curso.service';
import { isPlatformBrowser } from '@angular/common';  

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, FormularioCursoComponent, RouterModule],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  cursos = [
    {
      nombre: 'Curso de Programación en Python',
      docente: 'Dr. Juan Pérez',
      fecha: '01/10/2024',
      duracion: '8 semanas',
      descripcion: 'Este curso está diseñado para principiantes y profesionales que desean aprender Python...',
      imagen: ''
    },
    {
      nombre: 'Curso de Marketing Digital',
      docente: 'Lic. Laura Gómez',
      fecha: '05/11/2024',
      duracion: '6 semanas',
      descripcion: 'Este curso proporciona una comprensión profunda de las estrategias de marketing digital...',
      imagen: ''
    },
    {
      nombre: 'Curso de Fotografía Digital',
      docente: 'Prof. Ana Rodríguez',
      fecha: '15/09/2024',
      duracion: '4 semanas',
      descripcion: 'Este curso está diseñado para entusiastas de la fotografía...',
      imagen: ''
    },
    {
      nombre: 'Curso de Desarrollo Web Front-End',
      docente: 'Ing. Carlos Fernández',
      fecha: '01/12/2024',
      duracion: '12 semanas',
      descripcion: 'Este curso ofrece una inmersión completa en el desarrollo web front-end...',
      imagen: ''
    },
    {
      nombre: 'Curso de Diseño Gráfico',
      docente: 'Diseñadora Marta López',
      fecha: '20/10/2024',
      duracion: '5 semanas',
      descripcion: 'El curso de diseño gráfico está diseñado para aquellos que buscan desarrollar su creatividad...',
      imagen: ''
    }
  ];

  constructor(
    private servicioCurso: ServicioCursoService, 
    @Inject(PLATFORM_ID) private platformId: Object  
  ) {}

  async ngOnInit(): Promise<void> {
    await this.cargarCursos();
  }

  async cargarCursos(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {  
      const cursosGuardados = localStorage.getItem('listacursos');
      if (cursosGuardados) {
        this.cursos = JSON.parse(cursosGuardados);
      } else {
        for (let curso of this.cursos) {
          const imagenPerro = await this.servicioCurso.getFotoPerro2();
          curso.imagen = imagenPerro;
        }
        localStorage.setItem('listacursos', JSON.stringify(this.cursos));
      }
    }
  }

  limpiarLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) { 
      localStorage.removeItem('listacursos');
      this.cursos = [];
      console.log('LocalStorage y lista de cursos limpiados.');
    }
  }

  @ViewChild('formulario') formulario!: FormularioCursoComponent;

  async guardar(curso: any): Promise<void> {
    if (isPlatformBrowser(this.platformId)) { 
      const imagenPerro = await this.servicioCurso.getFotoPerro2();
      curso.imagen = imagenPerro;
      this.cursos.push(curso);
      let cursosGuardados = localStorage.getItem('listacursos');
      let cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
      cursos.push(curso);
      localStorage.setItem('listacursos', JSON.stringify(cursos));
      this.formulario.limpiarFormulario();
    }
  }

  eliminarCurso(curso: any): void {
    if (isPlatformBrowser(this.platformId)) { 
      this.cursos = this.cursos.filter(c => c !== curso);
      localStorage.setItem('listacursos', JSON.stringify(this.cursos));
    }
  }

  getDetallesId(curso: any): string {
    return 'detalles-' + curso.nombre.replace(/\s+/g, '-').toLowerCase();
  }

  mostrarDetalles(curso: any): void {
    const detalles = document.getElementById(this.getDetallesId(curso));

    if (detalles) {
      if (detalles.style.display === "none" || detalles.style.display === "") {
        detalles.classList.add('show');
        detalles.style.display = "block";
      } else {
        detalles.classList.remove('show');
        setTimeout(() => {
          detalles.style.display = "none";
        }, 300);
      }
    }
  }
}
