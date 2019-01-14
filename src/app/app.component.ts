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
  video = "FT1lzUrVY_Y";
  contrasena = "t7tvukad";
  mostrarPass = false;
  valorDePromesa = new Promise((resolve, reject)=>{
     setTimeout(()=>resolve('Llego la data'), 950)
  })
  obj = {
      "/pets": {
        "get": {
          "description": "Returns all pets from the system that the user has access to",
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "A list of pets.",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/pet"
                }
              }
            }
          }
        }
      }
    }

  heroes = {"-LW8qNKxYI03V97GZVB8":{"bio":"nnnn","casa":"Marvel","nombre":"leonardo arturo hernandez espinosa"},"-LW8v4ZsLZoE-2Xs5DIt":{"bio":"sdsadas","casa":"DC","nombre":"arturo2"},"-LW8wjkBE2zvCEYjlant":{"bio":"dsadasdasda","casa":"DC","nombre":"norman hernandez"},"-LW94YEY9cS7CoByTxa6":{"bio":"fdsfsdf","casa":"DC","nombre":"leonardo arturo hernandez espinosa m"}}

}
