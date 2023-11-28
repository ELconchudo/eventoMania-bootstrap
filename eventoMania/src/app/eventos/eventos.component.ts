import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from '../models/evento.model'

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  @Input() eventos: Evento;
  @Output() guardarCambios = new EventEmitter<Evento>();
  editando: boolean = false;

  cambiarEdicion() {
    if (this.editando) {
      this.guardarCambios.emit(this.eventos);
    }

    this.editando = !this.editando;
  }

}
