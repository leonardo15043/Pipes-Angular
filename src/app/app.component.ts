import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Leoanardo"
  numero = [0,1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.4523765;
  pago = 3.24450;
  fecha = new Date();
  valorDePromesa = new Promise((resolve, reject)=>{
     setTimeout(()=>resolve('Llego la data'), 950)
  })




}
