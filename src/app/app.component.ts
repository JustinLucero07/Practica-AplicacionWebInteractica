import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { FormularioCursoComponent } from './components/formulario-curso/formulario-curso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CursoComponent,FormularioCursoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Practica-AplicacionWebInteractiva';

  ngOnInit(): void {
    
  }
}
