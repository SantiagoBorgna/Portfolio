const translations = {
  en: {
    // Navbar
    nav_about: "About me",
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
    about: [
      "Welcome to my portfolio! I'm Santiago Borgna, a dedicated Junior Software Developer based in Córdoba, Argentina. My journey in the world of software development has been driven by a relentless pursuit of innovation and a deep-seated passion for crafting solutions that make a difference.",
      "What sets me apart is my collaborative spirit and adaptability. Thriving in team environments, I leverage my leadership qualities to deliver high-quality solutions within deadlines. Proficient in Java, SQL, Spring Boot, and various web technologies, I prioritize continuous learning and professional growth to stay ahead in the ever-evolving tech landscape.",
      "Armed with a Diploma in Java Programming and pursuing a Bachelor's degree in Software Engineering, my technical expertise is complemented by a commitment to excellence. Fluent in Spanish and with advanced proficiency in English, I'm poised to contribute effectively to dynamic projects in the Java development sphere.",
      "Thank you for joining me on this exciting path of discovery and innovation. Let's collaborate and bring innovative ideas to life!"
    ],

    // Projects
    project1Title: "El Arca Home - Inventory system",
    project1Desc: "A desktop application tailored for small businesses to efficiently manage inventory and daily sales across multiple branches. It includes real-time stock synchronization, sales registration with multiple payment methods, detailed reporting, and account tracking for customers. The interface is designed to be user-friendly and optimized for high-volume daily operations.",

    project2Title: "El Arca Home - Ecommerce",
    project2Desc: "A fully responsive and dynamic e-commerce website developed for El Arca Home, a home goods store. This platform allows users to browse a catalog of products, add items to a cart, and complete purchases. It features a clean user interface, stock control, and an admin-friendly backend connected to a live MySQL database.",

    project3Title: "Natura - Order manager",
    project3Desc: "A desktop application developed to manage Natura sales cycles and their associated orders. The system allows users to create and edit cycles, register client orders, and keep track of all orders within each cycle using a MySQL database. It provides a simple and organized interface to streamline order management.",

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
    about: [
      "¡Bienvenido a mi portafolio! Soy Santiago Borgna, un Desarrollador de Software Junior de Córdoba, Argentina. Mi camino en el mundo del desarrollo de software está guiado por la innovación y la pasión por crear soluciones que generen impacto.",
      "Lo que me diferencia es mi espíritu colaborativo y mi adaptabilidad. Disfruto trabajar en equipo, aprovechando mis cualidades de liderazgo para entregar soluciones de calidad en tiempo y forma. Manejo Java, SQL, Spring Boot y diversas tecnologías web, siempre priorizando el aprendizaje continuo y el crecimiento profesional.",
      "Con un Diplomado en Programación Java y cursando la Licenciatura en Ingeniería de Software, complemento mi experiencia técnica con un fuerte compromiso hacia la excelencia. Soy nativo en español y tengo un nivel avanzado de inglés, lo que me permite contribuir en proyectos dinámicos dentro del ámbito del desarrollo Java.",
      "Gracias por visitar mi portafolio. ¡Colaboremos y llevemos ideas innovadoras a la realidad!"
    ],

    // Projects
    project1Title: "El Arca Home - Sistema de inventario",
    project1Desc: "Aplicación de escritorio pensada para pequeños negocios que necesiten gestionar inventario y ventas diarias en múltiples sucursales. Incluye sincronización de stock en tiempo real, registro de ventas con múltiples métodos de pago, reportes detallados y gestión de cuentas corrientes de clientes. La interfaz es simple y optimizada para operaciones diarias de alto volumen.",

    project2Title: "El Arca Home - Tienda online",
    project2Desc: "Sitio de e-commerce completamente responsivo y dinámico desarrollado para El Arca Home, un bazar de artículos para el hogar. La plataforma permite explorar el catálogo de productos, agregar ítems al carrito y realizar compras. Incluye control de stock y un backend amigable para la administración, conectado a una base de datos MySQL en vivo.",

    project3Title: "Natura - Gestor de pedidos",
    project3Desc: "Aplicación de escritorio para gestionar ciclos de ventas de Natura y sus pedidos asociados. Permite crear y editar ciclos, registrar pedidos de clientes y llevar el control de todos los pedidos dentro de cada ciclo, utilizando una base de datos MySQL. La interfaz es sencilla y organizada para optimizar la gestión de pedidos.",

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

    // About me (párrafos)
    if (Array.isArray(translations[lang].about)) {
      translations[lang].about.forEach((text, i) => {
        safeSet(`about-${i + 1}`, text);
      });
    }

    // Projects
    safeSet("project1-title", translations[lang].project1Title);
    safeSet("project1-desc", translations[lang].project1Desc);
    safeSet("project2-title", translations[lang].project2Title);
    safeSet("project2-desc", translations[lang].project2Desc);
    safeSet("project3-title", translations[lang].project3Title);
    safeSet("project3-desc", translations[lang].project3Desc);

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

