const translations = {
  en: {
    // Navbar
    nav_about: "About me",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_stack: "Tech stack",
    nav_contact: "Contact",
    projects_readmore: "Read more",
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
    project1Title: "El Arca Home - Inventory system",
    project1Desc: "A desktop application tailored for small businesses to efficiently manage inventory and daily sales across multiple branches. It includes real-time stock synchronization, sales registration with multiple payment methods, detailed reporting, and account tracking for customers. The interface is designed to be user-friendly and optimized for high-volume daily operations.",

    project2Title: "El Arca Home - Ecommerce",
    project2Desc: "A fully responsive and dynamic e-commerce website developed for El Arca Home, a home goods store. This platform allows users to browse a catalog of products, add items to a cart, and complete purchases. It features a clean user interface, stock control, and an admin-friendly backend connected to a live MySQL database.",

    project3Title: "Natura - Order manager",
    project3Desc: "A desktop application developed to manage Natura sales cycles and their associated orders. The system allows users to create and edit cycles, register client orders, and keep track of all orders within each cycle using a MySQL database. It provides a simple and organized interface to streamline order management.",

    project4Title: "Dr. Natalia Molina - Professional Website",
    project4Desc: "Modern and fully responsive landing page developed for a plastic surgery specialist. Built using HTML5, CSS3, and Vanilla JavaScript to ensure maximum performance and SEO. It implements smooth navigation, an interactive modal system with dynamic data injection for the treatment catalog, and direct integration with the WhatsApp API for appointment management.",

    // Education
    edu1Title: "Software Engineering",
    edu1School: "Siglo 21 University",
    edu1Year: "2023 - Present day",

    edu2Title: "Diploma in Java Programming",
    edu2School: "National Technological University Buenos Aires",

    // Tech stack
    softSkills: "Soft skills",
    softSkillsList: [
      "Teamwork",
      "Scrum",
      "Open-Mindedness",
      "Adaptability",
      "Communication",
      "Time Management",
      //"Emotional Intelligence",
      "Critical Thinking",
      //"Empathy",
      "Organization",
      "Work ethic and motivation",
      "Creativity",
      "Attention to detail",
      "Problem solving"
    ],

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
    projects_readmore: "Ver más",
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
    project1Title: "El Arca Home - Sistema de inventario",
    project1Desc: "Aplicación de escritorio pensada para pequeños negocios que necesiten gestionar inventario y ventas diarias en múltiples sucursales. Incluye sincronización de stock en tiempo real, registro de ventas con múltiples métodos de pago, reportes detallados y gestión de cuentas corrientes de clientes. La interfaz es simple y optimizada para operaciones diarias de alto volumen.",

    project2Title: "El Arca Home - Tienda online",
    project2Desc: "Sitio de e-commerce completamente responsivo y dinámico desarrollado para El Arca Home, un bazar de artículos para el hogar. La plataforma permite explorar el catálogo de productos, agregar ítems al carrito y realizar compras. Incluye control de stock y un backend amigable para la administración, conectado a una base de datos MySQL en vivo.",

    project3Title: "Natura - Gestor de pedidos",
    project3Desc: "Aplicación de escritorio para gestionar ciclos de ventas de Natura y sus pedidos asociados. Permite crear y editar ciclos, registrar pedidos de clientes y llevar el control de todos los pedidos dentro de cada ciclo, utilizando una base de datos MySQL. La interfaz es sencilla y organizada para optimizar la gestión de pedidos.",

    project4Title: "Dra. Natalia Molina - Sitio Web Profesional",
    project4Desc: "Landing page moderna y totalmente responsiva desarrollada para una especialista en cirugía plástica. Construida con HTML5, CSS3 y JavaScript puro para asegurar máximo rendimiento y SEO. Implementa una navegación fluida (SPA), un sistema de modales interactivos, e integración directa con la API de WhatsApp para la gestión de citas.",

    // Education
    edu1Title: "Ingeniería en Software",
    edu1School: "Universidad Siglo 21",
    edu1Year: "2023 - Actualidad",

    edu2Title: "Diplomado en Programación Java",
    edu2School: "Universidad Tecnológica Nacional Buenos Aires",

    // Tech stack
    softSkills: "Habilidades blandas",
    softSkillsList: [
        "Trabajo en equipo",
        "Scrum",
        "Mentalidad abierta",
        "Adaptabilidad",
        "Comunicación",
        "Gestión del tiempo",
        //"Inteligencia emocional",
        "Pensamiento crítico",
        //"Empatía",
        "Organización",
        "Ética de trabajo y motivación",
        "Creatividad",
        "Atención al detalle",
        "Resolución de problemas"
    ],

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

    // Projects
    safeSet("project1-title", translations[lang].project1Title);
    safeSet("project1-desc", translations[lang].project1Desc);
    safeSet("project2-title", translations[lang].project2Title);
    safeSet("project2-desc", translations[lang].project2Desc);
    safeSet("project3-title", translations[lang].project3Title);
    safeSet("project3-desc", translations[lang].project3Desc);
    safeSet("project4-title", translations[lang].project4Title);
    safeSet("project4-desc", translations[lang].project4Desc);

    // Read more buttons
    const readmoreText = translations[lang].projects_readmore;
    document.querySelectorAll(".projects-readmore").forEach(btn => {
      btn.textContent = readmoreText;
    });

    // Education
    safeSet("edu1-title", translations[lang].edu1Title);
    safeSet("edu1-school", translations[lang].edu1School);
    safeSet("edu1-year", translations[lang].edu1Year);
    safeSet("edu2-title", translations[lang].edu2Title);
    safeSet("edu2-school", translations[lang].edu2School);
    safeSet("edu2-year", translations[lang].edu2Year);

    // Tech stack - soft skills list
    safeSet("softskills-title", translations[lang].softSkills);
    const softSkillEls = document.querySelectorAll(".soft-skill");
    const list = translations[lang].softSkillsList || [];
    list.forEach((text, i) => {
      if (softSkillEls[i]) softSkillEls[i].textContent = text;
    });

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

