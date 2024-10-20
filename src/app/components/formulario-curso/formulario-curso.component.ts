import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.scss']
})
export class FormularioCursoComponent implements OnInit {

  @Input() nombre: string = '';
  @Input() docente: string = '';
  @Input() fecha: string = '';
  @Input() duracion: string = '';
  @Input() descripcion: string = '';
  @Output() nform = new EventEmitter();

  ngOnInit(): void {
  }

  agregarCurso(): void {
    // Limpiar errores previos
    this.limpiarErrores();

    let isValid = true;

    if (this.nombre === '') {
      this.marcarError(document.querySelector('#nombre') as HTMLInputElement, 'El nombre es requerido.');
      isValid = false;
    }
    if (this.docente === '') {
      this.marcarError(document.querySelector('#docente') as HTMLInputElement, 'El docente es requerido.');
      isValid = false;
    }

    const fechaRegex = /^([0-2][0-9]|(3)[0-1])\/((0)[1-9]|(1)[0-2])\/\d{4}$/;
    if (this.fecha === '') {
      this.marcarError(document.querySelector('#fecha') as HTMLInputElement, 'La fecha es requerida.');
      isValid = false;
    } else if (!fechaRegex.test(this.fecha)) {
      this.marcarError(document.querySelector('#fecha') as HTMLInputElement, 'El formato de la fecha es incorrecto. Use el formato dd/mm/yyyy.');
      isValid = false;
    }

    if (this.duracion === '') {
      this.marcarError(document.querySelector('#duracion') as HTMLInputElement, 'La duración es requerida.');
      isValid = false;
    } else if (!/^\d+$/.test(this.duracion.trim())) {
      this.marcarError(document.querySelector('#duracion') as HTMLInputElement, 'La duración debe ser un número.');
      isValid = false;
    }

    if (this.descripcion === '') {
      this.marcarError(document.querySelector('#descripcion') as HTMLTextAreaElement, 'La descripción es requerida.');
      isValid = false;
    }

    if (isValid) {
      this.nform.emit({
        nombre: this.nombre,
        docente: this.docente,
        fecha: this.fecha,
        duracion: this.duracion,
        descripcion: this.descripcion
      });
      this.limpiarFormulario();
    }
  }

  limpiarFormulario(): void {
    this.nombre = '';
    this.docente = '';
    this.fecha = '';
    this.duracion = '';
    this.descripcion = '';
  }

  limpiarErrores(): void {
    const campos = ['nombre', 'docente', 'fecha', 'duracion', 'descripcion'];
    campos.forEach(campo => {
      const input = document.querySelector(`#${campo}`) as HTMLElement;
      input.classList.remove('error');
      const mensajeError = input.nextElementSibling;
      if (mensajeError && mensajeError.classList.contains('error-message')) {
        mensajeError.remove();
      }
    });
  }

  marcarError(campo: HTMLInputElement | HTMLTextAreaElement, mensaje: string): void {
    campo.classList.add('error');
    const errorMensaje = document.createElement('span');
    errorMensaje.classList.add('error-message');
    errorMensaje.textContent = mensaje;
    campo.parentNode?.insertBefore(errorMensaje, campo.nextSibling);
  }
}
