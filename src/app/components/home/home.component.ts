import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
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

  downloadCV(): void {
    window.open('assets/Noe_CV.pdf', '_blank'); // Aquí pones el link a tu CV
  }
}



