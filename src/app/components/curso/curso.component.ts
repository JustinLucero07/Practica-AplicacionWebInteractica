import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    },
    {
      nombre: 'Curso de Marketing Digital',
      docente: 'Lic. Laura Gómez',
      fecha: '05/11/2024',
      duracion: '6 semanas',
      descripcion: 'Este curso proporciona una comprensión profunda de las estrategias de marketing digital...',
    },
    {
      nombre: 'Curso de Fotografía Digital',
      docente: 'Prof. Ana Rodríguez',
      fecha: '15/09/2024',
      duracion: '4 semanas',
      descripcion: 'Este curso está diseñado para entusiastas de la fotografía...',
    },
    {
      nombre: 'Curso de Desarrollo Web Front-End',
      docente: 'Ing. Carlos Fernández',
      fecha: '01/12/2024',
      duracion: '12 semanas',
      descripcion: 'Este curso ofrece una inmersión completa en el desarrollo web front-end...',
    },
    {
      nombre: 'Curso de Diseño Gráfico',
      docente: 'Diseñadora Marta López',
      fecha: '20/10/2024',
      duracion: '5 semanas',
      descripcion: 'El curso de diseño gráfico está diseñado para aquellos que buscan desarrollar su creatividad...',
    }
  ];  

  constructor() { 
    // Inicializar cursos en localStorage solo una vez
    const cursosGuardados = localStorage.getItem('cursos');
    if (!cursosGuardados) {
      localStorage.setItem('cursos', JSON.stringify(this.cursos)); 
    }
  }

  ngOnInit(): void {
    this.cargarCursos();  
  }

  cargarCursos(): void {
    const cursosGuardados = localStorage.getItem('cursos');
    if (cursosGuardados) {
      this.cursos = JSON.parse(cursosGuardados);  
    }
  }

  eliminarCurso(index: number): void {
    this.cursos.splice(index, 1); // Eliminar el curso del array
    this.guardarCursos(); // Llamar al método para guardar los cambios
  }

  guardarCursos(): void {
    localStorage.setItem('cursos', JSON.stringify(this.cursos)); // Guardar la lista actualizada en localStorage
  }
}


