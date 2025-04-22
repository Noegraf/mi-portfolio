import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  menuOpen = false;
  visibleSection = '';

  @ViewChild('menuRef') menuRef!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visibleSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
  }

  // Verifica si la sección pasada está activa
  isActive(sectionId: string): boolean {
    return this.visibleSection === sectionId;
  }

  // Scroll suave a la sección y cierra el menú
  navigateAndClose(section: string): void {
    this.scrollToSection(section);
    this.closeMenu();
  }

  scrollToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  // Detecta clics fuera del menú para cerrarlo
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInside = this.menuRef?.nativeElement.contains(event.target);
    const toggleBtn = document.querySelector('.menu-toggle');
    if (!clickedInside && !toggleBtn?.contains(event.target as Node)) {
      this.closeMenu();
    }
  }
}
