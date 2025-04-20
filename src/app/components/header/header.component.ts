import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  signal,
  effect,
  AfterViewInit
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  activeRoute = signal('');
  menuOpen = false;

  @ViewChild('menuRef') menuRef!: ElementRef;

  constructor(private router: Router) {
    effect(() => {
      this.activeRoute.set(this.router.url);
    });
  }

  ngAfterViewInit(): void {
    // Se usa para asegurar que el ViewChild esté definido
  }

  isActive(route: string): boolean {
    return this.activeRoute() === route;
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

  navigateAndClose(section: string): void {
    this.scrollToSection(section);
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInside = this.menuRef?.nativeElement.contains(event.target);
    const toggleBtn = document.querySelector('.menu-toggle');
    if (!clickedInside && !toggleBtn?.contains(event.target as Node)) {
      this.closeMenu();
    }
  }
}
