import { Component, signal } from '@angular/core';
import { CalculadoraComponent } from './components/calculadora/calculadora'
import { ListaCompra } from './components/lista-compra/lista-compra';
// import { HelloWordComponent } from './components/helloword.component'
// import { MinhaPagina } from './minha-pagina/minha-pagina'

@Component({
  imports: [ListaCompra],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
