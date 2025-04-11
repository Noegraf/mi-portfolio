
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  selectedIndex: number = 0;
  public Object = Object;

  // Referencia al contenedor de la línea de tiempo
  @ViewChild('timelineWrapper') timelineWrapper!: ElementRef;

  timelineItemsData = [
    // Aquí van los elementos de la línea de tiempo

      // Experiencia profesional
      { title: 'Diseñadora UX/UI en Umaru Danladi & Danladi Design', description: 'Estudio de diseño con base en Canadá que crea soluciones digitales avanzadas. Realicé análisis de usuarios, wireframes y prototipos interactivos en Figma centrados en diseños de IA para optimizar la accesibilidad y la usabilidad.', date: 'Feb 2025 - Mar 2025', type: 'experience' },
      { title: 'Diseñadora UX/UI en Disruptive Talent', description: 'Startup de HR tech en México especializada en matching entre talento y empresas. Diseñé flujos de usuario y prototipos de alta fidelidad, iterando mejoras basadas en pruebas de usabilidad para aumentar la eficiencia del onboarding.', date: 'Dic 2024 - Feb 2025', type: 'experience' },
      { title: 'Diseñadora UX/UI en Consultora Disruptive', description: 'Firma de consultoría digital en México enfocada en transformación UX y metodologías ágiles. Rediseñé interfaces corporativas basadas en métricas de uso y pruebas de usuario, mejorando la claridad de navegación.', date: 'Sep 2024 - Dic 2024', type: 'experience' },
      { title: 'Diseñadora de Producto en MicaIA', description: 'Edtech argentina que desarrolla soluciones de IA para educación personalizada. Diseñé interfaces accesibles para niños neurodivergentes, implementando microinteracciones lúdicas y validando flujos en prototipos interactivos.', date: 'May 2024 - Nov 2024', type: 'experience' },
      { title: 'Diseñadora UX/UI en TCM', description: 'Empresa acerera mexicana especializada en soluciones de seguridad vial. Creé una landing page responsive con CTA optimizados, utilizando pruebas A/B para incrementar la generación de leads.', date: 'Ago 2024 - Sep 2024', type: 'experience' },
      { title: 'Diseñadora de Producto UX/UI en Apolus', description: 'Fintech en México que ofrece wallets digitales y soluciones de pago. Desarrollé un Design System en Figma, documentando tokens de color y componentes reutilizables para estandarizar el desarrollo front‑end. Particpé en todo el desarrollo del producto.', date: 'Mar 2024 - Sep 2024', type: 'experience' },
      { title: 'UX/UI Design Officer en PONTEM', description: 'Plataforma de infraestructura blockchain y DeFi en México. Conduje pruebas de usabilidad, creación de prototipos, rediseño de flujos críticos y documentación.', date: 'Mar 2023 - Mar 2024', type: 'experience' },
      { title: 'Diseñadora UX/UI en Biointropic', description: 'Empresa de biotecnología en Colombia dedicada a I+D y sistemas de recolección de datos. Diseñé formularios adaptativos que recopilaban que recopilaban gran cantidad de información, reduciendo errores de usuario y fricciónes.', date: 'Dic 2023 - Ene 2024', type: 'experience' },
      { title: 'Diseñadora Web en Macrotécnica', description: 'Agencia de construcción en Colombia. Creé la identidad visual y el diseño de la landing page de la empresa.', date: 'Ene 2023 - Mar 2023', type: 'experience' },
      { title: 'Diseñadora UX/UI en Assure for Life', description: 'Insurtech de EE.UU. especializada en seguros de vida digitales. Rediseñé la arquitectura de información de plataformas web y móviles para mejorar la experiencia de usuario.', date: 'Nov 2022 - Dic 2022', type: 'experience' },
      // Educación y certificaciones
      { title: 'Diplomatura UX/UI', description: 'Programa oficial de la UTN-BA en modalidad e‑learning. Aprendí investigación de usuarios, prototipado en Figma y validación de usabilidad remota.', date: '2024 - Actualidad', type: 'education' },
      { title: 'Desarrollador Full Stack Junior', description: 'Instituto en Argentina con enfoque MERN. Estudié Node.js, Express, MongoDB y Angular, y desarrollé proyectos integrales de front‑end y back‑end.', date: '2022 - 2023', type: 'education' },
      { title: 'Diseño UX/UI', description: 'Curso intensivo en Buenos Aires. Adquirí fundamentos de arquitectura de información, wireframing y tests de usabilidad.', date: '2022', type: 'education' },
      { title: 'Licenciatura en Bellas Artes', description: 'Universidad Nacional de Rosario, especialidad en Bellas Artes. Desarrollé habilidades en composición visual y teoría del color.', date: '2011 - 2016', type: 'education' },
      { title: 'Diseño Integral', description: 'Centro de Estudios de Diseño Gráfico, Diseño de Interiores, Diseño Industrial y Marketing. Formé competencias en software de diseño (Illustrator, Photoshop) y Dibujo técnico.', date: '2006 - 2009', type: 'education' },
      { title: 'Diseño de UX para Videojuegos', description: 'Curso online de UX gaming. Aprendí heurísticas específicas para interfaces de juego y prototipado en Unity.', date: '2025', type: 'certification' },
      { title: 'Game Design', description: 'Formación en mecánicas de juego, narrativa interactiva y herramientas de gamification.', date: '2025', type: 'certification' },
      { title: 'UI - Design System', description: 'Curso de creación y mantenimiento de sistemas de diseño. Documenté componentes y establecí flujos colaborativos en Figma.', date: '2024', type: 'certification' },
      { title: 'Product Manager', description: 'Formación en gestión de producto digital. Aprendí a definir roadmaps, priorizar backlog y medir KPIs de éxito.', date: '2023', type: 'certification' },
      { title: 'Full Stack', description: 'Certificación oficial de desarrollo web. Construí aplicaciones con Angular, Node.js y bases de datos NoSQL en proyectos reales.', date: '2021', type: 'certification' }
    ];

  constructor() { }

  ngOnInit(): void {
    this.sortTimelineItems();
  
    this.groupTimelineItemsByYear();
    this.sortTimelineItems();
    this.groupTimelineItemsByYear();
    this.generateTimelineYears();
  }

  // Función para ordenar los elementos por fecha
  sortTimelineItems(): void {
    this.timelineItemsData.sort((a, b) => {
      const dateA = this.parseDate(a.date);
      const dateB = this.parseDate(b.date);

      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    });
  }

  // Función para convertir una fecha en formato string a un objeto Date
  parseDate(dateStr: string): Date {
    const [startDate, endDate] = dateStr.split(' - ');
    const year = parseInt(startDate.match(/\d{4}/)?.[0] ?? '0');
    return new Date(year, 0); // Devuelve el 1 de enero de ese año
  }

  selectItem(index: number): void {
    this.selectedIndex = index;
    this.scrollToItem(index); // Desplazar al hito seleccionado
  }

  nextItem(): void {
    if (this.selectedIndex < this.timelineItemsData.length - 1) {
      this.selectedIndex++;
      this.scrollToItem(this.selectedIndex); // Desplazar al siguiente hito
    }
  }

  prevItem(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.scrollToItem(this.selectedIndex); // Desplazar al hito anterior
    }
  }

  scrollToItem(index: number): void {
    setTimeout(() => {
      const timelineWrapper = this.timelineWrapper.nativeElement;
      const timelineItems = timelineWrapper.children;
      const selectedItem = timelineItems[index];
  
      if (selectedItem) {
        selectedItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest', 
          inline: 'center'
        });
  
        // Ajuste manual para garantizar el centrado
        const wrapperRect = timelineWrapper.getBoundingClientRect();
        const itemRect = selectedItem.getBoundingClientRect();
        const offset = (wrapperRect.width / 2) - (itemRect.width / 2);
  
        timelineWrapper.scrollBy({
          left: itemRect.left - wrapperRect.left - offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  get selectedYear(): string {
    const start = this.timelineItemsData[this.selectedIndex]?.date.split(' - ')[0];
    return start?.substring(start.length - 4) || '';
  }


  groupedTimeline: { [year: string]: any[] } = {};


groupTimelineItemsByYear(): void {
  this.groupedTimeline = {};

  for (const item of this.timelineItemsData) {
    const year = this.parseDate(item.date).getFullYear().toString();

    if (!this.groupedTimeline[year]) {
      this.groupedTimeline[year] = [];
    }

    this.groupedTimeline[year].push(item);
  }
}


timelineYears: string[] = [];


generateTimelineYears(): void {
  const yearsSet = new Set<string>();
  for (const item of this.timelineItemsData) {
    const year = this.parseDate(item.date).getFullYear().toString();
    yearsSet.add(year);
  }
  this.timelineYears = Array.from(yearsSet).sort();
}








}
