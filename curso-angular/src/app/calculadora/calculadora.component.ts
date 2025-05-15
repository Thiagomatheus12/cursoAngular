import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  result: number = 0;

  form: FormGroup = new FormGroup({
    number1: new FormControl(null, Validators.required),
    number2: new FormControl(null, Validators.required),
  });

  submit(): number {
    const number1 = this.form.value.number1;
    const number2 = this.form.value.number2;
    return this.result = number1 + number2
  }

}
