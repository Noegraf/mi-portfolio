import { Component, AfterViewInit, OnInit } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from "./components/contact/contact.component";
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "./loading/loading.component";
import { HomeComponent } from "./components/home/home.component";
import { ModalComponent } from './components/modal/modal.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ModalComponent, CommonModule, HeaderComponent, AboutComponent, FooterComponent, ProjectsComponent, TimelineComponent, ContactComponent, LoadingComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements AfterViewInit, OnInit {
  isLoading: boolean = true;


  isModalOpen = false;
  selectedProject: any = null;
  
  toolPaths: { [key: string]: string } = {
    "Figma": "assets/figma.svg",
    "Photoshop": "assets/Photoshop.svg",
    "Illustrator": "assets/illustrator.svg",
    "Discord": "assets/Discord.svg",
    "Reddit": "assets/Reddit.svg",
    "Typeform": "assets/Typeform.svg",
  };

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  closeModal() {
    this.selectedProject = null;
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  ngOnInit(): void {
    // Simulamos una carga de 3 segundos antes de ocultar la pantalla de carga
    setTimeout(() => {
      this.isLoading = false;
    }, 2500); // 3000 ms = 3 segundos

    
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.full-page');
  
    // 🔹 Observador para detectar scroll y activar animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    // 🔹 Manejo de clic en el menú de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
        const targetId = link.getAttribute('href')?.substring(1); // Elimina el #
        if (!targetId) {
          console.error("⚠️ No se encontró un ID en el enlace:", link);
          return;
        }
  
        const targetSection = document.getElementById(targetId); // Busca la sección
        if (!targetSection) {
          console.error(`⚠️ No se encontró la sección con id="${targetId}"`);
          return;
        }
  
        targetSection.classList.add('visible'); // Activa animación
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
      });
    });
  }
  
  
  

  title = 'mi-portafolio';

  
}






