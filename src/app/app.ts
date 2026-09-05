import { Component, signal } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora'
// import { HelloWordComponent } from './components/helloword.component'
// import { MinhaPagina } from './minha-pagina/minha-pagina'

@Component({
  imports: [CalculadoraComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
