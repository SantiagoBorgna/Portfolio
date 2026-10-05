const translations = {
  en: {
    // Navbar
    nav_about: "About me",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_stack: "Tech stack",
    nav_contact: "Contact",
    contact_title: "Contact",
    contact_subtitle: "Get in touch",
    contact_phone: "Phone",

    // Títulos principales
    aboutTitle: "ABOUT ME",
    projectsTitle: "PROJECTS",
    educationTitle: "EDUCATION",
    techTitle: "TECH STACK",
    contactTitle: "CONTACT",

    // About me
    "about-1": "I'm Santiago Borgna, a backend software engineer based in Córdoba, Argentina. I build business systems in Java and Spring Boot and take them from client requirements to production, including an inventory and sales system and an e-commerce store used in production by a retail client.",
    "about-2": "I currently work as a technical and functional consultant at GiGa Global, customizing Odoo ERP with Python. Earlier this year I designed and built a multi-tenant compliance platform for an environmental consultancy, with JWT authentication and role-based access. I'm now focusing on application security.",
    "about-3": "I'm completing a B.Sc. in Software Engineering at Universidad Siglo 21 (GPA 9.33/10) and I'm open to remote opportunities.",

    // Experience
    "experience-title": "EXPERIENCE",

    "exp1-role": "Technical and Functional Consultant",
    "exp1-date": "May 2026 – Present",
    "exp1-place": "Córdoba, Argentina",
    "exp1-b1": "Translate client business processes into technical requirements for Odoo ERP implementations.",
    "exp1-b2": "Build and extend custom Odoo functionality for client operational, sales and accounting workflows.",
    "exp1-b3": "Diagnose and fix defects and configuration issues to keep client systems stable.",
    "exp1-b4": "Coordinate updates, data migrations and releases from staging to production.",

    "exp2-role": "Software Developer (Professional Internship)",
    "exp2-date": "Mar 2026 – Jun 2026",
    "exp2-place": "Environmental consultancy, Córdoba",
    "exp2-b1": "Designed and built a multi-tenant compliance tracking platform that replaces an Excel-based process: each client and the admin see their compliance status and the next tasks required by provincial regulations.",
    "exp2-b2": "Implemented a REST API in Spring Boot with JWT authentication and role-based access, keeping each client's data isolated.",
    "exp2-b3": "Managed the database with versioned Flyway migrations and containerized the application with Docker.",
    "exp2-b4": "Delivered a working demo with a React frontend; production rollout is pending on the client's side.",

    "exp3-role": "Freelance Software Engineer",
    "exp3-date": "Jan 2024 – Feb 2026",
    "exp3-place": "Retail, Córdoba",
    "exp3-b1": "Built and maintained a multi-branch inventory and sales system in production, with real-time stock synchronization, multiple payment methods, customer accounts and reporting.",
    "exp3-b2": "Built the store's e-commerce website on a Spring Boot REST API (catalog, cart, stock control, MySQL backend), live in production.",
    "exp3-b3": "Handled the full cycle with the client: requirements, relational database design, development, deployment and user training.",

    // Projects
    "project1-title": "BIO HUB — Compliance tracking platform",
    "project1-desc": "Multi-tenant web platform for an environmental consultancy in Córdoba, replacing an Excel-based process. Each client and the admin see their compliance status and the next tasks required by provincial regulations. REST API with JWT authentication, role-based access and per-client data isolation. Built during my professional internship; the consultancy has the demo and has not yet moved it to production.",
    "project1-status": "Demo delivered",

    "project2-title": "El Arca Home — E-commerce",
    "project2-desc": "Online store for a home goods retailer: product catalog, cart, stock control and an admin backend on a Spring Boot REST API with a MySQL database. Live in production.",
    "project2-status": "In production",
    "project2-visit": "Visit store",
    "project2-code": "View code",

    "project3-title": "El Arca Home — Inventory system",
    "project3-desc": "Desktop application for managing inventory and daily sales across multiple branches: real-time stock synchronization, multiple payment methods, customer account tracking and reporting. In daily use by the client.",
    "project3-status": "In production",
    "project3-code": "View code",

    // Education
    edu1Title: "Software Engineering",
    edu1School: "Siglo 21 University",
    edu1Year: "2023 - Present day",

    edu2Title: "Diploma in Java Programming",
    edu2School: "National Technological University Buenos Aires",

    // Tech stack
    "stack-languages": "Languages",
    "stack-backend": "Backend",
    "stack-frontend": "Frontend",
    "stack-databases": "Databases",
    "stack-tools": "Tools & practices",

    // Contact
    "contact-subtitle": "Get in touch",
    "contact-phone-label": "Phone",
    "contact-email-label": "Email",
  },

  es: {
    // Navbar
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos",
    nav_education: "Educación",
    nav_stack: "Tecnologías",
    nav_contact: "Contacto",
    contact_title: "Contacto",
    contact_subtitle: "Hablemos",
    contact_phone: "Teléfono",

    // Títulos principales
    aboutTitle: "SOBRE MÍ",
    projectsTitle: "PROYECTOS",
    educationTitle: "EDUCACIÓN",
    techTitle: "TECNOLOGÍAS",
    contactTitle: "CONTACTO",

    // About me
    "about-1": "Soy Santiago Borgna, desarrollador backend de Córdoba, Argentina. Construyo sistemas de gestión en Java y Spring Boot y los llevo desde el relevamiento con el cliente hasta producción, incluyendo un sistema de inventario y ventas y una tienda online que un cliente del rubro retail usa en producción.",
    "about-2": "Actualmente trabajo como consultor técnico y funcional en GiGa Global, personalizando el ERP Odoo con Python. A comienzos de este año diseñé y desarrollé una plataforma multi-tenant de cumplimiento normativo para una consultora ambiental, con autenticación JWT y control de acceso por roles. Hoy me estoy enfocando en la seguridad de aplicaciones.",
    "about-3": "Curso la Ingeniería en Software en la Universidad Siglo 21 (promedio 9,33/10) y estoy abierto a oportunidades remotas.",

    // Experience
    "experience-title": "EXPERIENCIA",

    "exp1-role": "Consultor técnico y funcional",
    "exp1-date": "May 2026 – Actualidad",
    "exp1-place": "Córdoba, Argentina",
    "exp1-b1": "Traduzco procesos de negocio de los clientes en requerimientos técnicos para implementaciones del ERP Odoo.",
    "exp1-b2": "Desarrollo y extiendo funcionalidades a medida en Odoo para flujos operativos, comerciales y contables.",
    "exp1-b3": "Diagnostico y corrijo errores y problemas de configuración para mantener estables los sistemas de los clientes.",
    "exp1-b4": "Coordino actualizaciones, migraciones de datos y pasos a producción desde entornos de prueba.",

    "exp2-role": "Desarrollador de software (práctica profesional)",
    "exp2-date": "Mar 2026 – Jun 2026",
    "exp2-place": "Consultora ambiental, Córdoba",
    "exp2-b1": "Diseñé y desarrollé una plataforma multi-tenant de seguimiento de cumplimiento normativo que reemplaza un proceso en Excel: cada cliente y el administrador ven su estado de cumplimiento y las próximas tareas exigidas por la normativa provincial.",
    "exp2-b2": "Implementé una API REST en Spring Boot con autenticación JWT y control de acceso por roles, manteniendo aislados los datos de cada cliente.",
    "exp2-b3": "Gestioné la base de datos con migraciones versionadas en Flyway y empaqueté la aplicación con Docker.",
    "exp2-b4": "Entregué una demo funcional con frontend en React; el pase a producción está pendiente del lado de la consultora.",

    "exp3-role": "Ingeniero de software freelance",
    "exp3-date": "Ene 2024 – Feb 2026",
    "exp3-place": "Retail, Córdoba",
    "exp3-b1": "Desarrollé y mantuve un sistema de inventario y ventas multi-sucursal en producción, con sincronización de stock en tiempo real, múltiples medios de pago, cuentas corrientes de clientes y reportes.",
    "exp3-b2": "Desarrollé el sitio de e-commerce de la tienda sobre una API REST en Spring Boot (catálogo, carrito, control de stock, base MySQL), en producción.",
    "exp3-b3": "Cubrí el ciclo completo con el cliente: relevamiento, diseño de base de datos relacional, desarrollo, despliegue y capacitación de usuarios.",

    // Projects
    "project1-title": "BIO HUB — Plataforma de seguimiento de cumplimiento",
    "project1-desc": "Plataforma web multi-tenant para una consultora ambiental de Córdoba que reemplaza un proceso en Excel. Cada cliente y el administrador ven su estado de cumplimiento y las próximas tareas exigidas por la normativa provincial. API REST con autenticación JWT, control de acceso por roles y aislamiento de datos por cliente. Desarrollada en mi práctica profesional; la consultora tiene la demo y todavía no la pasó a producción.",
    "project1-status": "Demo entregada",

    "project2-title": "El Arca Home — Tienda online",
    "project2-desc": "Tienda online para un comercio de artículos para el hogar: catálogo de productos, carrito, control de stock y backend administrativo sobre una API REST en Spring Boot con base MySQL. En producción.",
    "project2-status": "En producción",
    "project2-visit": "Visitar tienda",
    "project2-code": "Ver código",

    "project3-title": "El Arca Home — Sistema de inventario",
    "project3-desc": "Aplicación de escritorio para gestionar inventario y ventas diarias en múltiples sucursales: sincronización de stock en tiempo real, múltiples medios de pago, cuentas corrientes de clientes y reportes. En uso diario por el cliente.",
    "project3-status": "En producción",
    "project3-code": "Ver código",

    // Education
    edu1Title: "Ingeniería en Software",
    edu1School: "Universidad Siglo 21",
    edu1Year: "2023 - Actualidad",

    edu2Title: "Diplomado en Programación Java",
    edu2School: "Universidad Tecnológica Nacional Buenos Aires",

    // Tech stack
    "stack-languages": "Lenguajes",
    "stack-backend": "Backend",
    "stack-frontend": "Frontend",
    "stack-databases": "Bases de datos",
    "stack-tools": "Herramientas y prácticas",

    // Contact
    "contact-subtitle": "Ponte en contacto",
    "contact-phone-label": "Teléfono",
    "contact-email-label": "Correo",
  }
};

function setLanguage(lang) {
  try {
    // Helper seguro
    function safeSet(id, value) {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
      const mEl = document.getElementById("m" + id);
      if (mEl) mEl.textContent = value;
    }

    // Logo
    const logoImg = document.getElementById("logo-desktop");
    if (lang === "en") {
        logoImg.src = "Images/logo-en.jpg";
    } else if (lang === "es") {
        logoImg.src = "Images/logo-es.jpg";
    }

    // Navbar + textos simples
    for (const key in translations[lang]) {
      const val = translations[lang][key];
      if (typeof val === "string") {
        safeSet(key, val);
      }
    }

    // Títulos principales
    safeSet("about-title", translations[lang].aboutTitle);
    safeSet("projects-title", translations[lang].projectsTitle);
    safeSet("education-title", translations[lang].educationTitle);
    safeSet("tech-title", translations[lang].techTitle);
    safeSet("contact-title", translations[lang].contactTitle);

    // Education
    safeSet("edu1-title", translations[lang].edu1Title);
    safeSet("edu1-school", translations[lang].edu1School);
    safeSet("edu1-year", translations[lang].edu1Year);
    safeSet("edu2-title", translations[lang].edu2Title);
    safeSet("edu2-school", translations[lang].edu2School);
    safeSet("edu2-year", translations[lang].edu2Year);

    // Contacto
    safeSet("contact-subtitle", translations[lang]["contact-subtitle"]);
    safeSet("contact-phone-label", translations[lang]["contact-phone-label"] + ":");
    safeSet("contact-email-label", translations[lang]["contact-email-label"] + ":");

    // Guardar elección en localStorage
    localStorage.setItem("lang", lang);

  } catch (err) {
    console.error("Error cambiando idioma:", err);
  }
}

// Inicializar con el idioma guardado
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});

