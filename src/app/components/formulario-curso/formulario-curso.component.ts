import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.scss']  
})
export class FormularioCursoComponent implements OnInit {
  cursos: any[] = []; 
  
  nombre= ''
  docente= ''
  fecha= ''
  duracion= ''
  descripcion= ''
  
  constructor() {}

  ngOnInit(): void {
    const cursosGuardados = localStorage.getItem('cursos');
    if (cursosGuardados) {
      this.cursos = JSON.parse(cursosGuardados);
    }
  }

  agregarCurso(): void {
    this.cursos.push({nombre: this.nombre,docente: this.docente,fecha: this.fecha,dureacion: this.duracion,descripcion: this.descripcion});
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
    this.limpiarFormulario();
  }

  validarYAgregarCurso(cursoForm: any): void {
    this.limpiarErrores();  
    if (cursoForm.valid) {  
      this.agregarCurso();  
    } else {
      ;  
    }
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

  limpiarFormulario(): void {
    this.nombre = '';
    this.docente = '';
    this.fecha = '';
    this.duracion = '';
    this.descripcion = '';
    
  }
}


