import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ FormsModule, CommonModule ],
  selector: 'app-calculadora',
  styleUrl: './calculadora.scss',
  templateUrl: './calculadora.html',
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    this.resultado = this.numero1 + this.numero2
    console.log("numero1 = " + this.numero1, "numero2 = "+this.numero2)
    console.log("chamado o metodo para calcular o resultado", this.resultado)
    return this.resultado
  }
}
