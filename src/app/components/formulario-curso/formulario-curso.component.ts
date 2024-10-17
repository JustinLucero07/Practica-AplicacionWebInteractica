import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-curso.component.html',
  styleUrl: './formulario-curso.component.scss'
})
export class FormularioCursoComponent implements OnInit{
  cursos: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  nuevoCurso = {
    nombre: '',
    docente: '',
    fecha: '',
    duracion: '',
    descripcion: ''
  };

  cargarCursos(): void {
    this.cursos = [
      {
        id: 'curso1',
        nombre: 'Curso de Programación en Python',
        docente: 'Dr. Juan Pérez',
        fecha: '01/10/2024',
        duracion: '8 semanas',
        descripcion: 'Este curso está diseñado para principiantes y profesionales que desean aprender Python, uno de los lenguajes de programación más populares en el mundo. A lo largo de las lecciones, los estudiantes explorarán conceptos fundamentales como variables, estructuras de control, funciones y programación orientada a objetos. También se introducirán a bibliotecas populares como Pandas y NumPy, esenciales para la manipulación de datos y el análisis. Al final del curso, los estudiantes serán capaces de crear sus propios programas y scripts, y estarán preparados para avanzar a proyectos más complejos, como el desarrollo de aplicaciones web y análisis de datos.'
      },
      {
        id: 'curso2',
        nombre: 'Curso de Marketing Digital',
        docente: 'Lic. Laura Gómez',
        fecha: '05/11/2024',
        duracion: '6 semanas',
        descripcion: 'En un mundo cada vez más digital, el marketing online se ha convertido en una herramienta esencial para las empresas. Este curso proporciona una comprensión profunda de las estrategias de marketing digital, incluyendo SEO, SEM, marketing en redes sociales y marketing por correo electrónico. Los estudiantes aprenderán a crear campañas efectivas, analizar datos de rendimiento y optimizar su enfoque para maximizar el retorno de inversión.'
      },
      {
        id: 'curso3',
        nombre: 'Curso de Fotografía Digital',
        docente: 'Prof. Ana Rodríguez',
        fecha: '15/09/2024',
        duracion: '4 semanas',
        descripcion: 'Este curso está diseñado para entusiastas de la fotografía que desean mejorar sus habilidades y comprensión técnica. Los participantes aprenderán sobre el funcionamiento de las cámaras, la composición de la imagen y la iluminación. A medida que avancen, se abordarán técnicas avanzadas como la fotografía de retrato, paisajes y fotografía nocturna.'
      },
      {
        id: 'curso4',
        nombre: 'Curso de Desarrollo Web Front-End',
        docente: 'Ing. Carlos Fernández',
        fecha: '01/12/2024',
        duracion: '12 semanas',
        descripcion: 'Este curso ofrece una inmersión completa en el desarrollo web front-end, ideal para aquellos que desean crear sitios web atractivos y funcionales. Los estudiantes aprenderán a utilizar tecnologías clave como HTML, CSS y JavaScript, así como frameworks populares como React. Se cubrirán conceptos de diseño responsivo, accesibilidad y optimización de rendimiento.'
      },
      {
        id: 'curso5',
        nombre: 'Curso de Diseño Gráfico',
        docente: 'Diseñadora Marta López',
        fecha: '20/10/2024',
        duracion: '5 semanas',
        descripcion: 'El curso de diseño gráfico está diseñado para aquellos que buscan desarrollar su creatividad y habilidades técnicas en diseño visual. Los participantes aprenderán a usar software de diseño como Adobe Illustrator y Photoshop, así como principios fundamentales de diseño como tipografía, color y composición.'
      }
    ];
  }

  agregarCurso(curso: any): void {
    this.cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }

  eliminarCurso(cursoId: string): void {
    this.cursos = this.cursos.filter(curso => curso.id !== cursoId);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }

  mostrarDetalles(cursoId: string): void {
    const detalles = document.getElementById(cursoId);
    if (detalles?.style.display === "none" || detalles?.style.display === "") {
      detalles.style.display = "block";
    } else {
    }
  }

  validarYAgregarCurso(curso: any): void {
    const id = curso.nombre.replace(/\s+/g, '').toLowerCase();
    const nuevoCurso = {
      ...curso,
      id: id
    };

    this.agregarCurso(nuevoCurso);
  }

  limpiarErrores(): void {
    const errores = document.querySelectorAll('.error');
    errores.forEach((campo) => {
      campo.classList.remove('error');
    });

    const mensajesError = document.querySelectorAll('.error-message');
    mensajesError.forEach((mensaje) => {
      mensaje.remove();
    });
  }
}
