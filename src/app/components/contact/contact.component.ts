




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NECESARIO PARA [(ngModel)]

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Asegurate de incluir FormsModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  selloSeleccionado: string = 'sello1'; // id del sello seleccionado
  animarSalida: boolean = false;
  puertaAbierta = false;

  get selloSeleccionadoImg(): string | undefined {
    return this.sellos.find(s => s.id === this.selloSeleccionado)?.img;
  }

  sellos = [
    { id: 'sello1', img: 'assets/estampillas/estampilla4.svg', nombre: 'Clásico' },
    { id: 'sello2', img: 'assets/estampillas/estampilla2.svg', nombre: 'Vintage' },
    { id: 'sello3', img: 'assets/estampillas/estampilla3.svg', nombre: 'Moderno' },
  ];

  seleccionarSello(id: string) {
    this.selloSeleccionado = id;
  }

 
ngOnInit() {
  // Abrir la puerta al iniciar
  setTimeout(() => {
    this.puertaAbierta = true;
  }, 500);
}

enviarMensaje() {
  if (this.nombre && this.correo && this.mensaje) {
    this.animarSalida = true;

    // Cerrar puerta antes de enviar
    this.puertaAbierta = false;

    setTimeout(() => {
      console.log('Formulario enviado:', {
        nombre: this.nombre,
        correo: this.correo,
        mensaje: this.mensaje,
        sello: this.selloSeleccionado
      });

      alert('¡Mensaje enviado con éxito!');

      this.nombre = '';
      this.correo = '';
      this.mensaje = '';
      this.animarSalida = false;
      this.puertaAbierta = true;
    }, 1500);
  } else {
    alert('Por favor completa todos los campos.');
  }
}
}






