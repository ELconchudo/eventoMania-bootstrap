import { Component } from '@angular/core';
import { Lista } from '../models/lista.model';

@Component({
    selector: 'app-lista-fotos',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista-fotos.component.css']
  })

  export class ListaComponent {
    title = 'EventoMania';
    tipo = 'Palau Sant Jordi';
  
    listas: Lista[] = [
      { titulo: "Lista Terror", direccion: "Palau Sant Jordi" },
      { titulo: "Lista Ciencia", direccion: "Sant Jordi Club" },
      { titulo: "Lista Comedia", direccion: "Razzmatazz" }
    ];
  
    esElMismoTipo(lista: Lista): boolean {
      return this.tipo == lista.direccion;
    }
  
  
  }