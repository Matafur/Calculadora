import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';
  resultado: any = '0';
  operacionActual: string = '';
  OperacionAnteror: any = null;

  numero(numero:number): void{
    if(this.resultado === '0'){
      this.resultado = numero.toString();
    }else{
      this.resultado += numero;
    }
  }

  valor(caracter: string): void {
    // Verifica si ya hay un punto decimal en el resultado
    if (!this.resultado.includes('.')) {
        // Si no hay un punto decimal, agrega el punto al resultado
        this.resultado += caracter;
    }
  }

 
  operacion(operador:string): void{
    if (this.OperacionAnteror !== null){
      this.calcular();
    }
    this.operacionActual = operador;
    this.OperacionAnteror = this.resultado;
    this.resultado = '0';
  }


  calcular():void{
    const operando1 = parseFloat(this.OperacionAnteror)
    const operando2 = parseFloat(this.resultado)

    if (!isNaN(operando1) && !isNaN(operando2)) {
      switch (this.operacionActual) {
        case '+':
          this.resultado = (operando1 + operando2).toString();
          break;
        case '-':
          this.resultado = (operando1 - operando2).toString();
          break;
        case '*':
          this.resultado = (operando1 * operando2).toString();
          break;
        case '/':
          this.resultado = (operando1 / operando2).toString();
          break;
        case'%':
        this.resultado = ((operando1 * operando2)/100 ).toString();
        break
        default:
          break;
      }
    }

    this.operacionActual = '';
    this.OperacionAnteror = null;
  
  }

  reset(): void {
    this.resultado = '0';
  }

  backspace(): void {
    if (this.resultado.length > 1) {
      // Eliminar el último carácter
      this.resultado = this.resultado.slice(0, -1);
    } else {
      // Si solo queda un carácter, establecer a '0'
      this.resultado = '0';
    }
  }




  constructor() { }

  ngOnInit(): void {
  }

}

