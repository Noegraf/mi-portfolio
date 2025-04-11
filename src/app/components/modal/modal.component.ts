import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() project: any;
  @Input() toolPaths!: { [key: string]: string };
  @Output() close = new EventEmitter<void>();
  


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    document.body.classList.add('modal-open'); // 🚫 Bloquea el scroll
  }

  ngOnDestroy() {
    document.body.classList.remove('modal-open'); // ✅ Habilita el scroll al cerrar
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeModal() {
    this.close.emit();
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  getExtraImages(projectName: string, imageCount: number): string[] {
    const slug = projectName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-") // Reemplaza todo lo que no sea letra o número
      .replace(/-+/g, "-")         // Reemplaza múltiples guiones por uno solo
      .replace(/^-|-$/g, "");      // Elimina guiones al inicio y fin

    const images: string[] = [];
    for (let i = 1; i <= imageCount; i++) {
      images.push(`assets/pantallas/${slug}-${i}.png`);
    }
    return images;
  }

  currentImageIndex = 0;

  prevImage() {
    const total = this.project?.details?.extraImages?.length || 0;
    this.currentImageIndex = (this.currentImageIndex - 1 + total) % total;
  }
  
  nextImage() {
    const total = this.project?.details?.extraImages?.length || 0;
    this.currentImageIndex = (this.currentImageIndex + 1) % total;
  }

}
