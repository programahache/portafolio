export type ContactInfo = {
  name: string;
  nameDisplay: string;
  nameInitials: string;
  role: string;
  location: { city: string; region: string; country: string };
  email: string;
  phone: { display: string; href: string };
  github: { label: string; href: string };
  linkedin: { label: string; href: string };
  availability: string;
  stack: string;
  edition: string;
  tickerItems: string[];
};

export const CONTACT: ContactInfo = {
  name: 'Harold Palacios',
  nameDisplay: 'Hapacai',
  nameInitials: 'HP',
  role: 'Fullstack Developer',
  location: { city: 'Medellín', region: 'Antioquia', country: 'Colombia' },
  email: 'haroldandres1901@gmail.com',
  phone: { display: '+57 313 528 9758', href: 'tel:+573135289758' },
  github: { label: 'github.com/haroldp', href: 'https://github.com/haroldp' },
  linkedin: { label: 'linkedin.com/in/haroldp', href: 'https://linkedin.com/in/haroldp' },
  availability: 'Q3 2026 · Remoto o híbrido',
  stack: '.NET · C# · React · TypeScript · Azure · PostgreSQL',
  edition: 'v 2026.05',
  tickerItems: [
    'En portada — LogiChef integra IA en operación de cocinas',
    'Disponible para proyectos · Q3 2026',
    'Stack — .NET · React · Azure · PostgreSQL',
    '12 proyectos publicados',
    'Medellín 21°C — papel ligero, tinta densa',
    'Pulsa N para modo texto · D para modo noche',
  ],
};

export type Project = {
  num: string;
  slug: string;
  title: string;
  kicker?: string;
  deck?: string;
  year: string;
  role: string;
  client: string;
  tech: string[];
  one?: string;
  description?: string;
  img?: string;
};

export const COVER: Project = {
  num: '00',
  slug: 'logichef',
  title: 'LogiChef',
  kicker: 'Cover Story · Producto destacado',
  deck: 'Una plataforma que reescribe la operación de cocinas profesionales: predice mermas, orquesta inventarios y convierte el caos del servicio en decisiones medibles. Construido sobre .NET y React, alimentado por modelos propios.',
  year: '2025',
  role: 'Fullstack · Producto',
  client: 'LogiChef Inc.',
  tech: ['.NET 8', 'C#', 'React', 'PostgreSQL', 'Azure', 'OpenAI'],
    img: '/img/logo.svg',
  description:
    'LogiChef nació de una intuición simple y un problema caro: el 18% del coste de una cocina profesional se pierde antes de servir el primer plato. La plataforma combina un núcleo transaccional en .NET con una capa de inteligencia que aprende del histórico de cada local — recetas, mermas, climatología, eventos — para sugerir compras, ajustar fichas técnicas y avisar antes de que el stock duela. La interfaz, construida en React, traduce todo eso a una sola pantalla legible desde el pase.',
};

export const PROJECTS: Project[] = [

  
  {
    num: '06',
    slug: 'medbyte',
    title: 'Medbyte.ai',
    client: 'Medbyte',
    year: '2024',
    role: 'Frontend',
    one: 'Plataforma Predictiva de Salud Mental Corporativa.',
    description: 'Desarrollo integral de una plataforma que procesa métricas en tiempo real. La arquitectura permite a los profesionales de la salud visualizar datos complejos de manera intuitiva, facilitando intervenciones tempranas y seguras en entornos corporativos.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    img: '/img/medbyte-ai.webp',
  },

   {
    num: '00',
    slug: 'logichef-ecosystem',
    title: 'LogiChef & AI Bot',
    client: 'LogiChef Inc.',
    year: '2025',
    role: 'Fullstack · Producto',
    one: 'El sistema operativo inteligente para cocinas profesionales.',
    description: 'Plataforma SaaS multi-tenant diseñada para orquestar la operación de restaurantes. Centraliza el control de inventarios, cálculos en tiempo real y la toma de pedidos online. Incluye un asistente inteligente integrado con IA que automatiza la atención al cliente y agendamientos por WhatsApp. Arquitectura Full Stack de alta disponibilidad.',
    tech: ['React', 'Node.js', 'C#', 'MySQL', 'WebSockets', 'Express'],
    img: '/img/logichef.webp',
  },

   {
    num: '03',
    slug: 'compurent-core',
    title: 'Compurent Web & Core',
    client: 'Compurent',
    year: '2024',
    role: 'Fullstack',
    one: 'Refactorización del sitio principal y desarrollo de plataforma corporativa.',
    description: 'Durante más de un año y medio de trabajo continuo, se lideró la refactorización integral del portal público para maximizar el rendimiento. Paralelamente, se desarrolló un robusto dashboard B2B de uso interno y privado para la administración operativa de la compañía.',
    tech: ['Next.js', 'Tailwind CSS', 'React'],
    img: '/img/compurent-co.webp',
  },


  
    {
    num: '16',
    slug: 'gdlwebcamp',
    title: 'GDLWebcamp',
    client: 'GDLW',
    year: '2021',
    role: 'Frontend',
    one: 'Sitio para conferencia de diseño web en español.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    img: '/img/GDLWebcam.webp',
  },
  {
    num: '04',
    slug: 'rutmas-logistics',
    title: 'Rutmas Logistics',
    client: 'Rutmas',
    year: '2026',
    role: 'Fullstack',
    one: 'Sistema integral de logística y trazabilidad de envíos.',
    description: 'Arquitectura de software a medida para la gestión logística empresarial. El sistema automatiza la asignación de rutas, validación de números de serie y trazabilidad de envíos mediante la integración precisa de webhooks, garantizando la sincronización operativa en tiempo real de todo el negocio.',
    tech: ['React', 'Node.js', 'C#', 'MySQL', 'WebSockets', 'Express'],
    img: '/img/rutmasHome.webp',
  },
  
  {
    num: '01',
    slug: 'compurent-blog',
    title: 'Compurent News',
    client: 'Compurent',
    year: '2024',
    role: 'Frontend / Arquitectura',
    one: 'Plataforma de contenidos de alto rendimiento con CMS Headless.',
    description: 'Desarrollo del blog oficial de la compañía implementando una arquitectura Headless. Se integró Directus como gestor de contenidos (CMS) para ofrecer a los editores una experiencia ágil, manteniendo tiempos de carga ultrarrápidos y un SEO impecable en el frontend.',
    tech: ['Next.js', 'Tailwind CSS', 'Directus CMS'],
    img: '/img/blogComp.webp',
  },

    {
    num: '05',
    slug: 'calisof',
    title: 'Calisof',
    client: 'Calisof',
    year: '2024',
    role: 'Frontend',
    one: 'Renovación digital orientada a la escalabilidad del negocio.',
    description: 'Diseño y desarrollo de una interfaz moderna y adaptada estratégicamente al modelo de negocio de la empresa. El objetivo arquitectónico fue maximizar el alcance de usuarios manteniendo una navegación fluida, rápida y altamente responsiva.',
    tech: ['Next.js', 'Tailwind CSS'],
    img: '/img/calisof2.webp',
  },

   
{
    num: '08',
    slug: 'universe808',
    title: 'universe808',
    client: 'Medbyte',
    year: '2024',
    role: 'Frontend',
    one: 'E-commerce editorial de moda urbana.',
    tech: ['Next.js', 'Sanity', 'Stripe'],
    img: '/img/universe808.webp',
  },

  {
    num: '07',
    slug: 'medbyte-dashboard',
    title: 'Medbyte Dashboard',
    client: 'Medbyte',
    year: '2024',
    role: 'Fullstack',
    one: 'Panel clínico con métricas en tiempo real para psicólogos.',
    description: 'Desarrollo de un panel clínico que permite a los psicólogos visualizar métricas en tiempo real, facilitando la toma de decisiones informadas sobre el bienestar de sus pacientes.',
    tech: ['React', '.NET', 'SignalR', 'SQL Server'],
    img: '/img/Dashboard.webp',
  },
  
    {
    num: '11',
    slug: 'wagnerrojas',
    title: 'Wagnerrojas.com',
    client: 'Wagner Rojas',
    year: '2023',
    role: 'Fullstack',
    one: 'Sitio institucional para centro de salud de la mujer.',
    tech: ['React', 'Strapi', 'Node.js'],
    img: '/img/wagnerRojas.webp',
  },
 
  {
    num: '10',
    slug: 'citas-wagner',
    title: 'Citas Wagner Rojas',
    client: 'Medbyte',
    year: '2023',
    role: 'Fullstack',
    one: 'Sistema de agendamiento clínico paso a paso.',
    tech: ['React', '.NET', 'PostgreSQL'],
    img: '/img/medbyte-co-citas-wagner-rojas.webp',
  },
   {
    num: '09',
    slug: 'landing-medbyte',
    title: 'Landing page Medbyte',
    client: 'Medbyte',
    year: '2024',
    role: 'Frontend',
    one: 'Landing conversacional con bot integrado para captación.',
    tech: ['Next.js', 'Tailwind'],
    img: '/img/landing-medbyte-ai.webp',
  },

  {
    num: '12',
    slug: 'control-gasto',
    title: 'Control Gasto',
    client: 'Personal',
    year: '2023',
    role: 'Fullstack',
    one: 'Motor de Proyecciones Financieras Personales.',
    description: 'Aplicación web enfocada en la experiencia de usuario para la planificación financiera. Incluye algoritmos de filtrado avanzado y proyecciones de gasto, procesando grandes volúmenes de datos transaccionales con tiempos de respuesta mínimos.',
    tech: ['React', 'Firebase', 'Tailwind'],
    img: '/img/controlGastos.webp',
  },
  {
    num: '13',
    slug: 'criptoapp',
    title: 'CriptoApp',
    client: 'Independiente',
    year: '2022',
    role: 'Frontend',
    one: 'Monitor Financiero en Tiempo Real frente a divisas fiat.',
    description: 'Interfaz de alta velocidad conectada a WebSockets para el monitoreo y cotización de criptoactivos frente a divisas fiat. Optimización de renderizado en el cliente para garantizar que los datos fluyan sin latencia.',
    tech: ['React', 'REST APIs', 'Styled Components'],
    img: '/img/CriptoApp.webp',
  },
  {
    num: '14',
    slug: 'dishmechol',
    title: 'Dishmechol',
    client: 'Dishmechol',
    year: '2020',
    role: 'Fullstack',
    one: 'E-commerce Especializado de Alto Rendimiento para insumos médicos.',
    description: 'Diseño y desarrollo Full Stack de una tienda en línea orientada a la conversión. Implementación de pasarelas de pago seguras, gestión dinámica de catálogo y un panel de administración a medida para simplificar la logística de envíos.',
    tech: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    img: '/img/Dishmechol.webp',
  },
  {
    num: '15',
    slug: 'juego',
    title: 'Juego',
    client: 'Independiente',
    year: '2022',
    role: 'Developer',
    one: 'Mini-juego de preguntas con feedback inmediato.',
    tech: ['JavaScript', 'Canvas'],
    img: '/img/Juegos.webp',
  },
    {
    num: '02',
    slug: 'ai-analytics-nda',
    title: 'AI Data Analytics',
    client: 'Privado (NDA)',
    year: '2025-2026',
    role: 'AI / Backend Engineer',
    one: 'Modelos predictivos y análisis profundo de datos corporativos.',
    description: 'Desarrollo e integración de modelos de Inteligencia Artificial para la analítica avanzada de métricas internas B2B. Por acuerdos de estricta confidencialidad comercial y arquitectura propietaria, los detalles técnicos, de negocio y las interfaces visuales de estas herramientas permanecen bajo reserva.',
    tech: ['IA', 'Data Analytics', 'Backend pipelines']
  },

  {
    num: '17',
    slug: 'portfolio',
    title: 'Portfolio',
    client: 'Independiente',
    year: '2023',
    role: 'Diseño · Dev',
    one: 'Versión anterior del portafolio personal. Grilla minimalista.',
    tech: ['React', 'CSS Grid'],
    img: '/img/portafolioV2.webp',
  }
];

export const TINTS: Record<string, string> = {
  '00': '#7a1410', '01': '#1f5f4a', '02': '#2f5a55', '03': '#2a55b7',
  '04': '#1f2b58', '05': '#a23029', '06': '#1a3554', '07': '#1a2d4a',
  '08': '#0b1f3a', '09': '#306d68', '10': '#1d6952', '11': '#cbd2d9',
  '12': '#1a1a17', '13': '#0e0e0e', '14': '#a37b5f', '15': '#2a1a4a',
  '16': '#1a3a3a', '17': '#1a1a1a',
};

// [colspan, aspect-ratio] — 18 entries forming 7 complete rows of 12 cols
export const GRID_PATTERN: [number, string][] = [
  [4, '4/3'], [4, '4/3'], [4, '4/3'],
  [6, '3/2'], [6, '4/5'],
  [4, '5/4'], [4, '4/3'], [4, '5/6'],
  [8, '16/9'], [4, '4/5'],
  [4, '4/3'], [4, '5/4'], [4, '4/3'],
  [6, '3/2'], [6, '4/5'],
  [4, '5/4'], [4, '4/3'], [4, '5/6'],
];

export const SPAN_CLASS: Record<number, string> = {
  4: 'md:col-span-4',
  6: 'md:col-span-6',
  8: 'md:col-span-8',
};
