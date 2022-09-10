import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
providedIn: "root"
})

export class AutosService{

    obtenListaAutos(): Auto[] {
        let listaAutos = this._determinaListaAutos();
        return listaAutos;
    }

    public obtenAuto( id: number ) {
        let listaAutos = this._determinaListaAutos();
        return listaAutos.find(auto => auto.id == id);
    }
    

    private _determinaListaAutos(): Auto[] {
    let listaAutos = [
        {
            id: 1,
            marca: "Audi",
            modelo: "A4",
            anio: 2020,
            color: "Amarillo",
            kilometros: 5000,
            calificacion: 2,
            precio: 5500000,
            imagenUrl: "assets/imagenAutos/auto1.JPG"
        },
        {
            id: 2,
            marca: "Jaguar",
            modelo: "BX",
            anio: 2020,
            color: "Rojo",
            kilometros: 10500,
            calificacion: 4,
            precio: 2900000,
            imagenUrl: "assets/imagenAutos/auto2.JPG"
        },
        {
            id: 3,
            marca: "Mercedez Benz",
            modelo: "e-A1",
            anio: 2018,
            color: "Gris",
            kilometros: 18000,
            calificacion: 3,
            precio: 2000000,
            imagenUrl: "assets/imagenAutos/auto3.JPG"
        },
        {
            id: 4,
            marca: "Audi",
            modelo: "bX-44",
            anio: 2020,
            color: "Azul",
            kilometros: 0,
            calificacion: 1,
            precio: 3500000,
            imagenUrl: "assets/imagenAutos/auto4.JPG"
        }
    ]
    return listaAutos;   
    }
}
