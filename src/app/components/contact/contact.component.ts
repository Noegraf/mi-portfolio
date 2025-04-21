import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // URL de la Web App de Google Apps Script (debes reemplazarla con la tuya)
  googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbzVdc1I00peEieI9Ofg7CSleCD-JXNxs6GJIlX9qwVLshNwPIxQN6u25jSe5TzWrXig/exec'; 

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  selloSeleccionado: string = 'sello1';

  animarSalida: boolean = false;
  puertaAbierta: boolean = false;

  successMessage: string = '';
  errorMessage: string = '';
  mostrarCartelExito: boolean = false;

  mostrarSelloSVG = false;
  selloFeedbackTipo: 'success' | 'error' = 'success';
  selloFeedbackSrc = 'assets/sello-feedback.svg';

  mostrarCaja = false;
  animarCaja = false;

  sellos = [
    { id: 'sello1', img: 'assets/estampillas/estampilla4.svg', nombre: 'Clásico' },
    { id: 'sello2', img: 'assets/estampillas/estampilla2.svg', nombre: 'Vintage' },
    { id: 'sello3', img: 'assets/estampillas/estampilla3.svg', nombre: 'Moderno' },
  ];

  get selloSeleccionadoImg(): string | undefined {
    return this.sellos.find(s => s.id === this.selloSeleccionado)?.img;
  }

  ngOnInit() {
    setTimeout(() => {
      this.puertaAbierta = true;
    }, 500);
  }

  seleccionarSello(id: string) {
    this.selloSeleccionado = id;
  }

  enviarMensaje() {
    if (!this.nombre || !this.correo || !this.mensaje) {
      this.errorMessage = 'Faltan datos';
      this.successMessage = '';
      this.mostrarSello('error');

      // Evitamos que se animen la carta o la caja
      this.animarSalida = false;
      this.mostrarCaja = false;
      this.animarCaja = false;

      return;
    }

    // Comenzamos animación de salida de la carta
    this.animarSalida = true;
    this.puertaAbierta = false;

    // Creamos el objeto de datos para enviar
    const data = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
      sello: this.selloSeleccionado
    };

    // Usamos fetch para enviar los datos a la Web App de Google Apps Script
    fetch(this.googleSheetsUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          // Esperamos a que la carta salga antes de mostrar la caja
          setTimeout(() => {
            this.successMessage = '¡Tu mensaje ha sido enviado con éxito! 💌';
            this.errorMessage = '';
            this.mostrarSello('success');

            this.mostrarCaja = true;

            // Pequeño delay para animar apertura
            setTimeout(() => {
              this.animarCaja = true;
            }, 100);

            this.mostrarCartelExito = true;

            // Cerramos la caja luego de unos segundos
            setTimeout(() => {
              this.animarCaja = false;
            }, 4000);

            setTimeout(() => {
              this.mostrarCaja = false;
              this.successMessage = '';
              this.mostrarCartelExito = false;
            }, 6000);

            this.resetFormulario();
          }, 1500); // tiempo de salida de la carta
        } else {
          this.successMessage = '';
          this.errorMessage = 'Ups... algo salió mal al enviar tu mensaje. Inténtalo de nuevo.';
          this.mostrarSello('error');
          this.resetAnimaciones();
        }
      })
      .catch(() => {
        this.successMessage = '';
        this.errorMessage = 'Sin conexión 😢. Verifica tu internet e intenta otra vez.';
        this.mostrarSello('error');
        this.resetAnimaciones();
      });
  }

  resetFormulario() {
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';

    // Dejamos que todo se vea unos segundos antes de resetear
    setTimeout(() => {
      this.successMessage = '';
      this.mostrarCartelExito = false;
      this.animarSalida = false;
      this.puertaAbierta = true;
    }, 5000);
  }

  resetAnimaciones() {
    this.animarSalida = false;
    this.puertaAbierta = true;
    this.mostrarCaja = false;
    this.animarCaja = false;
  }

  mostrarSello(tipo: 'success' | 'error') {
    this.selloFeedbackTipo = tipo;
    this.selloFeedbackSrc = 'assets/sello-feedback.svg';
    this.mostrarSelloSVG = false;

    setTimeout(() => {
      this.mostrarSelloSVG = true;
      setTimeout(() => {
        this.mostrarSelloSVG = false;
      }, 2000);
    });
  }
}
