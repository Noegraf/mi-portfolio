import { CommonModule } from '@angular/common';

import { Component, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private sanitizer: DomSanitizer) {}
  isModalOpen = false;
  selectedProject: any = null;
 



  @Output() openModal = new EventEmitter<any>(); 

  openProjectModal(project: any) {
    console.log("🟢 Enviando proyecto al modal:", project);
    this.openModal.emit(project); // ✅ Enviar evento al padre (app.component.ts)
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.classList.add('no-scroll');
  }
  
  filter: string = 'Todos';


  
  projects = [
    {
      name: "Talent Cloud - White Label",
      type: ["Desktop", "UX/UI"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/talent-cloud-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de login y secciones white label.",
        "Propuestas neumorfistas innovadoras."
      ],
      details: {
        flujo: true,
        prototipo: true,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/talent-cloud-flujo.png",
        prototipoUrl: "https://www.figma.com/proto/eNlTRzRMol4CCyh9G3PC0J/TALENTO-CLOUD-PROPUESTA-UX-UI?page-id=388%3A30113&node-id=388-31446&viewport=-364%2C230%2C0.06&t=fjyltQHTGuIp2z8l-1&scaling=contain&content-scaling=fixed&starting-point-node-id=388%3A31446&show-proto-sidebar=1",
        extraImages: [
          "assets/pantallas/DASHBOARD - BENEFICIOS- VOLVOtalent-cloud-login-1.png",
          "assets/pantallas/DASHBOARD - BENEFICIOS- VOLVOtalent-cloud-login.png",
          "assets/pantallas/DASHBOARD - COMPACTO - VOLVOtalent-cloud-login.png",
          "assets/pantallas/Frame 29talent-cloud-login.png",
          "assets/pantallas/Frame 31talent-cloud-login.png",
          "assets/pantallas/iPhone 13 & 14 - 9talent-cloud-login.png",
          "assets/pantallas/iPhone 13 & 14 - 10talent-cloud-login.png",
          "assets/pantallas/Slide 16_9 - 5talent-cloud.png",
          
        ],
        responsabilidades: [
          "Análisis y mejora de flujos existentes.",
          "Prototipado de login y secciones adaptables para white label.",
          "Iteración continua con feedback del cliente."
        ],
        principales_entregables: [
          "Diseño visual neumorfista adaptable a diferentes marcas.",
          "Tres propuestas de login optimizadas."
        ],
        impacto_resultados: [
          "Ahorro de tiempo en desarrollo por modularidad.",
          "Propuesta escalable y adaptable a nuevos branding."
        ]
      }
    },
    {
      name: "Reddit - Juego para Hackaton",
      type: ["Videojuego", "Hackatón", "UX/UI"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/reddit-game-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño y propuesta de juego en tiempo récord.",
        "Trabajo colaborativo en hackatón."
      ],
      details: {
        flujo: false,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma", "Reddit"],
        flujoImage: null,
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/desktopreddit-1.png",
          "assets/pantallas/desktopreddit-2.png",
          "assets/pantallas/desktopreddit-3.png",
          "assets/pantallas/desktopreddit.png",
          "assets/pantallas/OPTION 1reddit.png",
          "assets/pantallas/phonereddit-1.png",
          "assets/pantallas/phonereddit.png"
        ],
        responsabilidades: [
          "Diseño de flujos de interacción y dinámica de juego.",
          "Iteración rápida bajo presión con feedback continuo."
        ],
        principales_entregables: [
          "Prototipo funcional del juego para hackatón.",
          "Flujo optimizado para dinámica de juego."
        ],
        impacto_resultados: [
          "Reconocimiento por usabilidad en tiempo limitado.",
          "Demostración de capacidad para trabajo colaborativo intensivo."
        ]
      }
    },
   
    {
      name: "Itcoolab - Plataforma Colaborativa",
      type: ["Desktop", "UX/UI", "Branding"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/itcoolab-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de plataforma para colaboración en proyectos reales.",
        "Entorno de práctica profesional."
      ],
      details: {
        flujo: true,
        prototipo: true,
        arquitectura: true,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/Group 2it-coolab-flujo.png",
        arquitecturaImage: "assets/arquitectura-iteclab.jpg",
        prototipoUrl: "https://www.figma.com/proto/CdkGmA9iOjL1qoF1a694yi/IT-COLAB?page-id=19%3A869&node-id=125-1100&viewport=652%2C1423%2C0.13&t=NvTyDWCL5JEjLSpN-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=125%3A1100",
        extraImages: [
          "assets/pantallas/behanceit-coolab.png",
          "assets/pantallas/behanceit-coolab-1.png",
          "assets/pantallas/behanceit-coolab-2.png",
          "assets/pantallas/behanceit-coolab-3.png",
          "assets/pantallas/behanceit-coolab-4.png",
          
        ],
        responsabilidades: [
          "Diseño de experiencia para equipos colaborativos.",
          "Definición de roles y flujos de trabajo.",
          "Iteración con usuarios en entorno real."
        ],
        principales_entregables: [
          "Prototipo de plataforma colaborativa.",
          "Flujo de usuario para asignación de roles.",
          "Sistema de notificaciones integrado."
        ],
        impacto_resultados: [
          "Fomento de la colaboración en equipos multidisciplinarios.",
          "Validación de la idea de networking profesional."
        ]
      }
    },
    {
      name: "Voto - Sistema de Votación",
      type: ["Aplicación Móvil", "UX/UI", "Web3"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/voto-app-mobile.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Caso de estudio desarrollado para la facultad.",
        "Diseño de aplicación segura y simple para votación digital."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: true,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/flujo-voto.png",
        arquitecturaImage: "assets/arquitectura-voto.jpg",
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/1Voto.png",
          "assets/pantallas/2Voto.png",
          "assets/pantallas/3Voto.png",
          "assets/pantallas/4Voto.png",
          "assets/pantallas/5Voto.png",
          "assets/pantallas/6Voto.png",
          "assets/pantallas/7Voto.png",
          "assets/pantallas/8Voto.png",
          "assets/pantallas/9Voto.png",
          "assets/pantallas/10Voto.png",
        ],
        responsabilidades: [
          "Diseño de interfaz clara y comprensible para todos los niveles.",
          "Propuesta de solución con seguridad y verificación.",
          "Testing con usuarios en entorno académico."
        ],
        principales_entregables: [
          "App funcional con flujo de registro y voto.",
          "Prototipo en alta fidelidad.",
          "Modelo escalable para elecciones internas."
        ],
        impacto_resultados: [
          "Alta usabilidad validada con estudiantes.",
          "Propuesta presentada en contexto de PM y UX.",
          "Exploración de votación con identidad digital."
        ]
      }
    },
    {
      name: "Tango Wallet - Hackathon Ethereum",
      type: ["Aplicación Móvil", "UX/UI", "Web3", "Hackatón"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/tangowallet-mobile.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Participación en hackatón presencial en Buenos Aires.",
        "Diseño de wallet con integración a Scroll y tecnología Ethereum."
      ],
      details: {
        flujo: true,
        prototipo: true,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/flujo-tango.png",
        prototipoUrl: "https://www.figma.com/proto/15qxs0R6QijNqKyIICetjs/Tango-Wallet-Wireframes?page-id=7%3A340&node-id=36-9389&viewport=454%2C354%2C0.11&t=BwNHiDVpUv1lVgXH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=36%3A9389&show-proto-sidebar=1",
        extraImages: [
          "assets/pantallas/tango-1.png",
         
          "assets/pantallas/tango01.png",
          "assets/pantallas/tango02.png",
          
          "assets/pantallas/tango04.png",
          "assets/pantallas/tango05.png",
          "assets/pantallas/tango06.png",
          "assets/pantallas/tango07.png",
          "assets/pantallas/tango08.png",
          "assets/pantallas/tango10.png",
          "assets/pantallas/tango11.png",
        ],
        responsabilidades: [
          "Definición de flujos para transacciones Web3.",
          "Prototipado rápido durante la hackatón.",
          "Validación de experiencia de usuario con el equipo."
        ],
        principales_entregables: [
          "Wallet funcional con onboarding Web3.",
          "Diseño adaptable y modular.",
          "Prototipo navegable para testing temprano."
        ],
        impacto_resultados: [
          "Reconocimiento por el diseño de UX en el evento.",
          "Validación positiva del flujo de usuarios cripto.",
          "Entrega completa en menos de 72 hs."
        ]
      }
    },
    
    {
      name: "MicaIA - Plataforma Educativa",
      type: ["Aplicación Web", "UX/UI", "Educación", "Accesibilidad", "Branding"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/MICAIA-mobile.svg",
      notes: [
        "Rol: Product Designer",
        "Investigación de accesibilidad y estudio de usuarios.",
        "Diseño de branding, flujos y prototipo con enfoque inclusivo."
      ],
      details: {
        flujo: true,
        prototipo: true,
        arquitectura: true,
        herramientas: ["Figma", "Illustrator"],
        flujoImage: "assets/pantallas/flujo-micaia.png",
        arquitecturaImage: "assets/arquitectura-micaia-educativa.jpg",
        prototipoUrl: "https://www.figma.com/proto/cwvOllqeXqpFNHIhafo2au/MICAIA-UX-UI?page-id=1%3A4&node-id=6-2333&viewport=667%2C-175%2C0.24&t=x5Pqz3HoZVX918ah-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A3080&show-proto-sidebar=1",
        extraImages: [
          "assets/pantallas/micaiaapp01.png",
          "assets/pantallas/micaiaapp02.png",
          "assets/pantallas/micaiaapp03.png",
          "assets/pantallas/micaiaapp04.png",
          "assets/pantallas/micaiaapp05.png",
          "assets/pantallas/micaiaapp06.png",
          "assets/pantallas/micaiaapp07.png",
          "assets/pantallas/micaiaapp08.png",
          "assets/pantallas/micaiaapp09.png",
          "assets/pantallas/micaiaapp10.png",
          "assets/pantallas/micaiaapp11.png",
          "assets/pantallas/micaiaapp12.png",
          "assets/pantallas/micaiaapp13.png",
          "assets/pantallas/micaiaapp14.png",
          "assets/pantallas/micaiaapp15.png",
          "assets/pantallas/micaiabranding01.png",
          "assets/pantallas/micaiabranding02.png",
          "assets/pantallas/micaiabranding03.png",
          "assets/pantallas/micaiabranding04.png",
          "assets/pantallas/micaiabranding05.png",
          "assets/pantallas/micaiabranding06.png",
          "assets/pantallas/micaiajuego101.png",
          "assets/pantallas/micaiajuego102.png",
          "assets/pantallas/micaiajuego103.png",
          "assets/pantallas/micaiaweb01.png",
          "assets/pantallas/micaiaweb02.png",
          "assets/pantallas/micaiaweb03.png",
          "assets/pantallas/ONEPAGE MICAIA 1.png",
          "assets/pantallas/ONEPAGE MICAIA 2.png",
          "assets/pantallas/micaia-presentation01.png",
          "assets/pantallas/micaia-presentation02.png",
          "assets/pantallas/micaia-presentation03.png",
          "assets/pantallas/micaia-presentation04.png",
          "assets/pantallas/micaia-presentation05.png"
        ],
        responsabilidades: [
          "Investigación profunda en accesibilidad infantil.",
          "Diseño de interfaz adaptada a la neurodivergencia.",
          "Propuesta de experiencia lúdica y segura para niños."
        ],
        principales_entregables: [
          "Prototipo interactivo con flujos educativos.",
          "Guía de estilo inclusiva con sistema de colores accesibles.",
          "Presentaciones para difusión y alianzas educativas."
        ],
        impacto_resultados: [
          "Validación positiva por expertos en neurodivergencia.",
          "Alto interés en continuidad del proyecto educativo.",
          "Incremento en retención e interacción de usuarios en pruebas piloto."
        ]
      }
    },
    {
      name: "Apolus - App Cripto",
      type: ["Aplicación Web", "UX/UI", "Fintech"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/APOLUS-app-user-mobile.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de wallet y flujos para personas y empresas.",
        "Unificación de productos de Apolus y PXM."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma", "Illustrator", "Photoshop"],
        flujoImage: "assets/pantallas/flujo-apolus-app.png",
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/apolus-sketch.png",
          "assets/pantallas/apolus01@3x.png",
          "assets/pantallas/apolus02@3x.png",
          "assets/pantallas/apolus04@3x.png",
          "assets/pantallas/apolus05@3x.png",
          "assets/pantallas/apolus06@3x.png",
     
        ],
        responsabilidades: [
          "Rediseño de flujos heredados desde PXM.",
          "Diseño de wallet con perfiles múltiples y referidos.",
          "Análisis y simplificación del proceso KYC."
        ],
        principales_entregables: [
          "Interfaz intuitiva para gestión de criptoactivos.",
          "Wallet multicuenta con historial y seguridad integrada.",
          "Prototipo validado por usuarios internos."
        ],
        impacto_resultados: [
          "Mejora en tasa de conversión de onboarding.",
          "Reducción del 30% en errores de uso de wallet.",
          "Mayor retención de usuarios empresariales."
        ]
      }
    },
    {
      name: "Apolus - Plataforma de Administración",
      type: ["Dashboard", "Aplicación Web", "Gestión", "UX/UI"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/APOLUS-desktop-admin-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño del entorno administrativo y flujos de gestión.",
        "Colaboración directa con CEO, PM y equipo legal."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/flujo-apolusadmin.png",
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/apolus-admin01.png",
          "assets/pantallas/apolus-admin02.png",
          "assets/pantallas/apolus-admin03.png",
          "assets/pantallas/apolus-admin04.png",
          "assets/pantallas/apolus-admin05.png",
          "assets/pantallas/apolus-admin06.png",
          "assets/pantallas/apolus-admin07.png",
          "assets/pantallas/apolus-admin08.png"

        ],
        responsabilidades: [
          "Diseño de arquitectura para módulos administrativos.",
          "Creación de flujos para soporte, KYC, y monitoreo.",
          "Integración visual con identidad compartida de producto."
        ],
        principales_entregables: [
          "Dashboard para gestión de usuarios y transacciones.",
          "Flujos para aprobación de solicitudes y alertas de riesgo.",
          "Documentación visual y funcional."
        ],
        impacto_resultados: [
          "Reducción del 40% en tiempos de atención y verificación.",
          "Unificación visual y funcional con el producto usuario.",
          "Adopción completa del entorno por parte del equipo de soporte."
        ]
      }
    },
    {
      name: "PXM - App Mobile",
      type: ["Aplicación Móvil", "UX/UI", "Web3", "Presentaciones"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/pxm-app-user-mobile.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de aplicación para gestión de cuentas y transacciones.",
        "Optimización del flujo de usuario para operaciones financieras.",
        "Implementación de onboarding simplificado."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/flujo-pxm-kyc-app.png",
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/pxm-app01.jpg",
          "assets/pantallas/pxm-app02.jpg",
          "assets/pantallas/pxm-app03.jpg",
          "assets/pantallas/pxm-app04.jpg",
          "assets/pantallas/pxm-app05.jpg",
          "assets/pantallas/pxm-app06.jpg",
          "assets/pantallas/pxm-app07.jpg",
      
         
        ],
        responsabilidades: [
          "Diseño de interfaz para usuarios finales.",
          "Mejoras en la accesibilidad de transacciones.",
          "Creación de flujos para depósitos, retiros y transferencias."
        ],
        principales_entregables: [
          "Interfaz intuitiva para operaciones financieras.",
          "Optimización del proceso de registro y verificación KYC.",
          "Diseño de seguridad mejorado para autenticación."
        ],
        impacto_resultados: [
          "Incremento en la retención de usuarios.",
          "Reducción del tiempo de transacciones en un 40%.",
          "Aumento en la conversión de nuevos registros."
        ]
      }
    },
    {
      name: "PXM - Plataforma Web",
      type: ["Desktop", "UX/UI", "Web3"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/pxm-desktop-admin-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de interfaz para administradores y monitoreo de transacciones.",
        "Desarrollo de dashboards con métricas clave.",
        "Mejoras en la gestión de usuarios y soporte."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/pxm-admin-flujo.png",
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/pxm-admin01.png",
          "assets/pantallas/pxm-admin02.png",
          "assets/pantallas/pxm-admin03.png"
        ],
        responsabilidades: [
          "Creación de paneles de administración eficientes.",
          "Optimización del flujo de gestión de usuarios.",
          "Definición de estados de transacciones y alertas de riesgo."
        ],
        principales_entregables: [
          "Dashboard con reportes financieros en tiempo real.",
          "Interfaz simplificada para control de transacciones.",
          "Mejoras en la experiencia de soporte y resolución de problemas."
        ],
        impacto_resultados: [
          "Mayor eficiencia en la gestión de usuarios y transacciones.",
          "Reducción del 50% en tiempos de resolución de soporte.",
          "Mejor visibilidad de métricas financieras clave."
        ]
      }
    },
    {
      name: "PXM - Landing Page",
      type: ["Landing Page", "UX/UI", "Web3"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/pxm-landing.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de landing page para adquisición de usuarios.",
        "Definición de estructura visual y narrativa de la marca.",
        "Optimización para SEO y conversión."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/flujo-pxm-landing.png",
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/pxm-landing01.png",
          "assets/pantallas/pxm-landing02.png",
          "assets/pantallas/pxm-landing03.png",
          "assets/pantallas/pxm-landing04.png",
          "assets/pantallas/pxm-landing05.png",
          "assets/pantallas/pxm-landing06.png",
          "assets/pantallas/pxm-landing07.png"
        ],
        responsabilidades: [
          "Diseño visual alineado con la identidad de marca.",
          "Optimización de UX Writing para conversión.",
          "Estrategia de posicionamiento y adquisición de leads."
        ],
        principales_entregables: [
          "Landing page optimizada para SEO y conversión.",
          "Diseño visual atractivo y alineado con la marca.",
          "Optimización de formularios de registro."
        ],
        impacto_resultados: [
          "Incremento en la tasa de conversión de visitantes.",
          "Mayor captación de usuarios mediante estrategias UX.",
          "Mejor posicionamiento en buscadores."
        ]
      }
    },
    {
      name: "Macrotécnica - Landing Page",
      type: ["Landing Page", "UX/UI", "Branding", "Community Management", "Membrete y firma", "Renders"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/macrotecnica-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Desarrollo de identidad visual para empresa sin branding.",
        "Diseño de landing page responsiva en colaboración con el product owner.",
        "Optimización para conversión y SEO."
      ],
      details: {
        flujo: false,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma", "Photoshop", "Illustrator"],
        flujoImage: null,
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/macrotecnica01.png",
          "assets/pantallas/macrotecnica02.png",
          "assets/pantallas/macrotecnica03.png",
          "assets/pantallas/macrotecnica04.png",
          "assets/pantallas/macrotecnica05.png",
          "assets/pantallas/macrotecnica06.png",
          "assets/pantallas/macrotecnica07.png",
          "assets/pantallas/macrotecnica08.png",
          "assets/pantallas/macrotecnica09.png",
          "assets/pantallas/macrotecnica10.png",
         
         
        ],
        responsabilidades: [
          "Creación de identidad visual desde cero.",
          "Diseño de landing page con foco en conversión.",
          "Iteración conjunta con product owner y desarrollador."
        ],
        principales_entregables: [
          "Landing page responsiva y optimizada para SEO.",
          "Branding coherente y adaptable.",
          "Prototipo validado para captación de leads."
        ],
        impacto_resultados: [
          "Mejora en la imagen corporativa.",
          "Aumento en la conversión de clientes potenciales.",
          "Posicionamiento web fortalecido."
        ]
      }
    },
    {
      name: "Biointropic - Formularios Interactivos",
      type: ["Desktop", "UX/UI", "Rediseño", "Wireframes", "Formularios Interactivos"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/biointropic-desktop-admin-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño de plataforma para generación de formularios interactivos.",
        "Optimización del flujo para recolección de datos.",
        "Creación de wireframes y prototipos interactivos."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: "assets/pantallas/flujo-biointropic.png",
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/biointropic01.png",
          "assets/pantallas/biointropic02.png",
          "assets/pantallas/biointropic03.png",
          "assets/pantallas/biointropic04.png",
          "assets/pantallas/biointropic05.png",
          "assets/pantallas/biointropic06.png",
          "assets/pantallas/biointropic07.png",
      
          
        ],
        responsabilidades: [
          "Diseño UX/UI de la plataforma de formularios.",
          "Investigación y análisis de la experiencia de usuario.",
          "Definición de estructura de navegación y usabilidad."
        ],
        principales_entregables: [
          "Plataforma de formularios interactivos optimizada.",
          "Flujo intuitivo para creación y gestión de formularios.",
          "Prototipo interactivo en Figma."
        ],
        impacto_resultados: [
          "Mayor eficiencia en la recolección de datos.",
          "Reducción del tiempo de creación de formularios en un 60%.",
          "Mejor experiencia y tasa de finalización de formularios."
        ]
      }
    },
    {
      name: "Plenitud - Plataforma de Gestión",
      type: ["Desktop", "UX/UI", "Rediseño", "Wireframes"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/plenitud-tablet.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Diseño para usuarios clientes enfocado en contratos e información bancaria.",
        "Creación de 5 flujos: historial, perfil, contratos, asistente virtual, etc.",
        "Optimización de la experiencia para clientes."
      ],
      details: {
        flujo: false,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: null,
        arquitecturaImage: null,
        prototipoUrl: null,
        extraImages: [
          "assets/pantallas/plenitud01.png",
          "assets/pantallas/plenitud02.png",
          "assets/pantallas/plenitud03.png",
          "assets/pantallas/plenitud04.png",
          "assets/pantallas/plenitud05.png",
        ],
        responsabilidades: [
          "Diseño de experiencia para clientes incluyendo contratos y gestión bancaria.",
          "Creación de flujos para edición, historial y perfil.",
          "Integración de asistente virtual (bot) para soporte."
        ],
        principales_entregables: [
          "Plataforma con 5 flujos diferenciados para funciones clave.",
          "Prototipo interactivo validado.",
          "Interfaz adaptable para múltiples dispositivos."
        ],
        impacto_resultados: [
          "Mejora en la gestión de contratos y transacciones.",
          "Reducción de tiempos de interacción.",
          "Alta satisfacción de usuarios en pruebas de usabilidad."
        ]
      }
    },
    {
      name: "Assure for Life - Landing Page",
      type: ["Landing Page", "UX/UI"],
      folderColor: "var(--color-secondary)",
      image: "assets/pantallas/plenitud-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Rediseño de landing page existente.",
        "Reuniones de coordinación y ajuste de propuestas.",
        "Optimización para responsividad y conversión."
      ],
      details: {
        flujo: false,
        prototipo: true,
        arquitectura: false,
        herramientas: ["Figma"],
        flujoImage: null,
        arquitecturaImage: null,
        prototipoUrl: "https://www.figma.com/proto/WWglPo7avXq5yuet5QYVBH/ASSURE?page-id=14%3A11373&node-id=107-163&viewport=-899%2C235%2C0.07&t=xyCWzhuWJlP08kNJ-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=107%3A163&show-proto-sidebar=1",
        extraImages: [
          "assets/extraimages/landing assure (1).png",
          "assets/extraimages/landing assure (2).png",
          "assets/extraimages/landing assure (3).png",
          "assets/extraimages/landing assure (3).png",
          "assets/extraimages/landing assure (4).png",
          "assets/extraimages/landing assure (5).png",
          "assets/extraimages/landing assure (6).png",
          "assets/extraimages/landing assure (7).png",
          "assets/extraimages/landing assure (8).png"
        ],
        responsabilidades: [
          "Rediseño integral de la landing page.",
          "Ajuste de propuestas según requerimientos.",
          "Optimización de llamadas a la acción para conversión."
        ],
        principales_entregables: [
          "Landing page responsiva y atractiva.",
          "Prototipo interactivo validado.",
          "Diseño alineado con la identidad de la marca."
        ],
        impacto_resultados: [
          "Aumento en la tasa de conversión.",
          "Mejor posicionamiento SEO.",
          "Incremento en la captación de leads."
        ]
      }
    },
    {
      name: "HCP - Historia Clínica",
      type: ["Aplicación Móvil", "Desktop", "Desarrollo", "UX/UI", "Branding"],
      folderColor: "var(--color-secondary)",
      image: "assets/hcp-desktop.svg",
      notes: [
        "Rol: UX/UI Designer",
        "Proyecto para rendir junior development en el ISPC.",
        "Research, definición del problema, MVP, happy path, mapa de sitio, wireframes, partitura de interacción, diseño de grilla y branding.",
        "Interfaz desarrollada en Figma con prototipos interactivos."
      ],
      details: {
        flujo: true,
        prototipo: false,
        arquitectura: false,
        herramientas: ["Figma", "Photoshop"],
        flujoImage: "assets/flujo-hcp.jpg",
        arquitecturaImage: "assets/arquitectura-hcp.jpg",
        prototipoUrl: null,
        extraImages: [
          "assets/extraimages/hcp (1).png",
          "assets/extraimages/hcp (2).png",
          "assets/extraimages/hcp (3).png",
          "assets/extraimages/hcp (4).png",
          "assets/extraimages/hcp (5).png",
          "assets/extraimages/hcp (6).png",
          "assets/extraimages/hcp (7).png",
          "assets/extraimages/hcp (8).png",
          "assets/extraimages/hcp (9).png"
        ],
        responsabilidades: [
          "Investigación y análisis del problema.",
          "Definición del MVP y flujos de usuario.",
          "Diseño de wireframes, partitura de interacción y sistema de grillas.",
          "Desarrollo integral del branding."
        ],
        principales_entregables: [
          "Mapa de sitio estructurado.",
          "Wireframes y prototipos interactivos.",
          "Sistema de diseño y branding escalable."
        ],
        impacto_resultados: [
          "Propuesta integral para digitalizar historias clínicas.",
          "Mejora significativa en la experiencia de pacientes y médicos.",
          "Demostración de capacidad en soluciones integrales de UX/UI."
        ]
      }
    }
  ];

  
  toolPaths: { [key: string]: string } = {
    "Figma": "assets/figma.svg",  // Ruta de la imagen de Figma
    "Photoshop": "assets/Photoshop.svg",  // Ruta de la imagen de Photoshop
    "Illustrator": "assets/illustrator.svg",  
    "Discord": "assets/Discord.svg",  
    "Reddit": "assets/Reddit.svg",  
    "Typeform": "assets/Typeform.svg",  
  };

  get uniqueTypes(): string[] {
    const types = this.projects.flatMap(p => p.type);
    return Array.from(new Set(types));
  }
  
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  get filteredProjects() {
    return this.filter === 'Todos' 
      ? this.projects 
      : this.projects.filter(p => p.type.includes(this.filter));
  }




  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.classList.remove('no-scroll'); // 🔥 Reactivar scroll al cerrar
  }
  
  
  
}
