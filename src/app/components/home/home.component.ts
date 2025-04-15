import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s 0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  fadeInState = false;

  ngOnInit(): void {
    this.fadeInState = true; // Activa la animación de la bienvenida
  }

  downloadCV() {
    const cvUrl = 'assets/Noelia Valle - español.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Noelia Valle | UX UI Designer | 2025'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}



