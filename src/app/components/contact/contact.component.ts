import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formspreeUrl = 'https://formspree.io/f/xpwpllwq';  // nouvalle //


  // formspreeUrl = 'https://formspree.io/f/xqaqkqeo'; goldete//



  

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
      return;
    }
  
    this.animarSalida = true;
    this.puertaAbierta = false; // cerramos la carta visualmente
  
    const formData = new FormData();
    formData.append('name', this.nombre);
    formData.append('email', this.correo);
    formData.append('message', this.mensaje);
    formData.append('stamp', this.selloSeleccionado);
  
    fetch(this.formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    })
    .then(response => {
      if (response.ok) {
        // Esperamos que termine la animación de salida
        setTimeout(() => {
          this.mostrarCartelExito = true;
  
          // Esperamos un poco para que el DOM pinte el cartel cerrado
          setTimeout(() => {
            this.puertaAbierta = true; // ahora sí, animamos la apertura
  
            // Mostramos el mensaje y demás feedback
            this.successMessage = '¡Tu carta ha sido enviada con éxito! 💌';
            this.errorMessage = '';
            this.mostrarSello('success');
  
            // Después de unos segundos, todo se cierra y se resetea


            // Después de unos segundos, todo se cierra y se resetea
            setTimeout(() => {
              this.puertaAbierta = false; // 🔥 ahora sí: cerramos la carta
              this.mostrarCartelExito = false;
              this.successMessage = '';
              this.resetFormulario();
            }, 3000); // tiempo visible el mensaje abierto
  
          }, 100); // delay pequeño para que se note la animación
  
        }, 1000); // tiempo para que termine animación de salida
      } else {
        this.successMessage = '';
        this.errorMessage = 'Ups... algo salió mal al enviar tu carta. Inténtalo de nuevo.';
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
    this.animarSalida = false;
    this.puertaAbierta = true; // vuelve a mostrarla lista para completar
  }
  





  resetAnimaciones() {
    this.animarSalida = false;
    this.puertaAbierta = false;

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