import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] =[
    {legajo: 1,nombre: 'Ramon', apellido: 'Montero',sexo: 'Masculino', salario: 25000},
    {legajo: 2,nombre: 'Benny', apellido: 'Ventura',sexo: 'Masculino', salario: 30000},
    {legajo: 3,nombre: 'Lali', apellido: 'Siada',sexo: 'Femenino', salario: 29000},
    {legajo: 4,nombre: 'Maria', apellido: 'La Del Mar',sexo: 'Femenino', salario: 1000},
    {legajo: 5,nombre: 'John', apellido: 'Cena',sexo: 'Masculino', salario: 25000},
    {legajo: 6,nombre: 'Merlina', apellido: 'Addams',sexo: 'Femenino', salario: 28000},
  ]

  radioButtonSeleccionado = "Todos";

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }


  obtenerTotalMasculinos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void{
    this.radioButtonSeleccionado = radioButtonSelec;
  }
}
