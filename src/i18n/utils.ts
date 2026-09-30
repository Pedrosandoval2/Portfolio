export const languageList = {
    es: 'Español',       // Español
    en: 'English',       // Inglés
}

export const defaultLang = 'en';

export const labels = {
    es: {
        // Navegación
        "nav-home": "Inicio",
        "nav-about": "Sobre mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "nav-language": "en",

        // Sección Hero
        "hero-greeting": "Soy Pedro Sandoval",
        "hero-title": "Fullstack Developer",
        "hero-description": "Más de dos años de experiencia construyendo aplicaciones web, APIs y microservicios con React, TypeScript y Node.js, y aplicando desarrollo asistido por IA y automatización.",
        "hero-download-cv": "Descargar CV",

        // Estadísticas
        "stats-experience": "Años de\nExperiencia",
        "stats-technologies": "Tecnologías\nAplicadas",
        "stats-projects": "Proyectos\nCompletados",

        // Proyectos
        "projects-title": "PROYECTOS RECIENTES",

        // Experiencia
        "experience-title": "Experiencia",
        "experience-description": "Cada proyecto en el que he trabajado ha sido una oportunidad para mejorar mis habilidades, aprender nuevas tecnologías y brindar soluciones eficientes y bien estructuradas.",

        "experience-cueva-date": "12/2025 - PRESENTE",
        "experience-cueva-title": "Fullstack Developer",
        "experience-cueva-company": "Consorcio Cueva (World Binary – Impulse)",
        "experience-cueva-description": "Desarrollo full stack en la plataforma Impulse, con foco en backend, microservicios y automatización con IA.",
        "experience-cueva-highlight-1": "Diseñé la lógica de agregación del Ranking de Mejores Traders y optimicé sus consultas con Redis, reduciendo operaciones innecesarias sobre la base de datos.",
        "experience-cueva-highlight-2": "Desarrollo lógica backend en microservicios con Node.js y Express: cron jobs, optimización de consultas SQL y resolución de incidencias críticas.",
        "experience-cueva-highlight-3": "Participé en el desarrollo desde cero de un portal interno de soporte con Spec-Driven Development (SDD): especificaciones previas, integración de microservicios y APIs, y manejo de fallos parciales entre servicios.",
        "experience-cueva-highlight-4": "Desarrollé un flujo de automatización con Claude, Slack y Jira que genera tickets, asocia reportes a sus hilos de Slack y notifica cambios de estado.",
        "experience-cueva-highlight-5": "Aplico desarrollo asistido por IA y flujos multi-agente (subagentes coordinados) en análisis de código, arquitectura y optimización de proyectos.",
        "experience-cueva-highlight-6": "Construyo interfaces con React y TypeScript integrando APIs REST, con pruebas unitarias, code reviews y validación con QA.",
        "experience-cueva-skills": "Aptitudes: React, TypeScript, Node.js, Express, Redis, SQL, Microservicios, REST APIs, Spec-Driven Development, Multi-agent workflows, Claude, Slack, Jira.",

        "experience-gamt-date": "2025 - OCTUBRE / DICIEMBRE",
        "experience-gamt-title": "Asistente TI – Frontend Junior",
        "experience-gamt-company": "GAMT",
        "experience-gamt-description": "Migré una aplicación legacy de HTML/CSS/JS a una SPA en React, mejorando el rendimiento de carga, y automaticé despliegues continuos en Vercel y Netlify desde GitHub. Capacité al equipo en Git/GitHub y buenas prácticas de despliegue.",
        "experience-gamt-skills": "Aptitudes: React.js, JavaScript, Git, GitHub, Vercel, Netlify, CI/CD.",

        "experience-freelance-date": "2025 - PRESENTE",
        "experience-freelance-title": "Freelance Developer",
        "experience-freelance-company": "Freelance",
        "experience-freelance-description": "Diseño y desarrollo aplicaciones y sitios web robustos, escalables y visualmente atractivos, aplicando las mejores prácticas en desarrollo y arquitectura de software.",
        "experience-freelance-skills": "Aptitudes: React.js, React-Router, React-hook-form, Yup-Resolver, Docker, Zustand, I18n, Astro, Git BASH, GitHub, NestJS, JSON Web Token (JWT), Google Auth.",

        "experience-frontend-date": "2024 - JUNIO / DICIEMBRE",
        "experience-frontend-title": "Frontend Developer Junior",
        "experience-frontend-company": "ID Business Intelligence",
        "experience-frontend-description": "Optimicé la experiencia de usuario y el desarrollo frontend en un ecommerce mediante un login robusto, personalización en tiempo real, interfaces escalables y mejoras en el flujo de trabajo con herramientas como Redux, Zustand y Storybook.",
        "experience-frontend-skills": "Aptitudes: React.js, React-Router, TypeScript, Redux.js, Zustand, React-hook-form, Yup-Resolver, Postman, Storybook, Algolia.",

        "experience-fullstack-date": "2023-JUNIO | 2023-DICIEMBRE",
        "experience-fullstack-title": "Fullstack Developer Junior",
        "experience-fullstack-company": "Peruvian Dígital",
        "experience-fullstack-description": "Desarrollé APIs seguras y eficientes con JWT, mejoré la lógica de negocio en un ERP, y creé interfaces dinámicas y escalables con Angular, optimizando la experiencia del usuario y acelerando el desarrollo.",
        "experience-fullstack-skills": "Aptitudes: AngularJS, Node.js, TypeScript, TypeORM, MySQL, Bootstrap.",

        // Contacto
        "contact-title": "Contactame!",
        "contact-form-name": "Nombre Completo:",
        "contact-form-email": "Email:",
        "contact-form-message": "Mensaje:",
        "contact-form-submit": "Enviar Mensaje",
        "contact-form-placeholder-name": "Tu Nombre",
        "contact-form-placeholder-email": "email@gmail.com",
        "contact-form-placeholder-message": "Escribe tu mensaje o propuesta...",

        "contact-info-location": "Locación",
        "contact-info-location-value": "Lima, Perú",
        "contact-info-modality": "Modalidad",
        "contact-info-modality-remote": "Remoto",
        "contact-info-modality-hybrid": "Híbrido",
        "contact-info-modality-onsite": "Presencial",
        "contact-info-social": "Social Media",

        "whatsapp-tooltip": "Chat en WhatsApp",

        // Proyectos
        "project-1-title": "High Rise Tech Labs",
        "project-1-description": "Sistema basado en web para gestionar licencias de software, gestionar los pagos y administrar usuarios.",

        "project-2-title": "Event Creation System",
        "project-2-description": "Aplicación web para la gestión de eventos y creación de entradas.",

        "project-3-title": "Portafolio",
        "project-3-description": "Portafolio personal de proyectos y habilidades.",

        "project-4-title": "User Registration & QR Code",
        "project-4-description": "Aplicación web para registrar asistentes a eventos, generar códigos QR individuales y escanearlos para validar la asistencia en tiempo real.",

        "project-5-title": "Working....",
        "project-5-description": "Aplicación Mobile en desarrollo",

        // Lenguajes
        "select-language": "Seleccionar idioma",
        "english": "Inglés",
        "united-states": "Estados Unidos",
        "spanish": "Español",
        "spain": "España",
    },
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-language": "es",

        // Hero Section
        "hero-greeting": "I'm Pedro Sandoval",
        "hero-title": "Fullstack Developer",
        "hero-description": "Over two years of experience building web applications, APIs and microservices with React, TypeScript and Node.js, applying AI-assisted development and automation.",
        "hero-download-cv": "Download CV",

        // Statistics
        "stats-experience": "Years of\nExperience",
        "stats-technologies": "Technologies\nApplied",
        "stats-projects": "Projects\nCompleted",

        // Projects
        "projects-title": "RECENT PROJECTS",

        // Experience
        "experience-title": "Experience",
        "experience-description": "Every project I've worked on has been an opportunity to improve my skills, learn new technologies, and provide efficient, well-structured solutions.",

        "experience-cueva-date": "12/2025 - PRESENT",
        "experience-cueva-title": "Fullstack Developer",
        "experience-cueva-company": "Consorcio Cueva (World Binary – Impulse)",
        "experience-cueva-description": "Full stack development on the Impulse platform, focused on backend, microservices and AI-driven automation.",
        "experience-cueva-highlight-1": "Designed the aggregation logic for the Top Traders Ranking and optimized its queries with Redis, reducing unnecessary database operations.",
        "experience-cueva-highlight-2": "Build backend logic in microservices with Node.js and Express: cron jobs, SQL query optimization and critical incident resolution.",
        "experience-cueva-highlight-3": "Contributed to building an internal support portal from scratch using Spec-Driven Development (SDD): upfront specs, microservice and API integration, and handling of partial failures between services.",
        "experience-cueva-highlight-4": "Built an automation flow with Claude, Slack and Jira that creates tickets, links reports to their Slack threads and notifies status changes.",
        "experience-cueva-highlight-5": "Apply AI-assisted development and multi-agent workflows (coordinated sub-agents) for code analysis, architecture and project optimization.",
        "experience-cueva-highlight-6": "Build interfaces with React and TypeScript integrating REST APIs, backed by unit tests, code reviews and QA validation.",
        "experience-cueva-skills": "Skills: React, TypeScript, Node.js, Express, Redis, SQL, Microservices, REST APIs, Spec-Driven Development, Multi-agent workflows, Claude, Slack, Jira.",

        "experience-gamt-date": "2025 - OCTOBER / DECEMBER",
        "experience-gamt-title": "IT Assistant – Junior Frontend",
        "experience-gamt-company": "GAMT",
        "experience-gamt-description": "Migrated a legacy HTML/CSS/JS application to a React SPA, improving load performance, and automated continuous deployments to Vercel and Netlify from GitHub. Trained the team on Git/GitHub and deployment best practices.",
        "experience-gamt-skills": "Skills: React.js, JavaScript, Git, GitHub, Vercel, Netlify, CI/CD.",

        "experience-freelance-date": "2025 - PRESENT",
        "experience-freelance-title": "Freelance Developer",
        "experience-freelance-company": "Freelance",
        "experience-freelance-description": "Design and develop robust, scalable, and visually appealing applications and websites, applying best practices in software development and architecture.",
        "experience-freelance-skills": "Skills: React.js, React-Router, React-hook-form, Yup-Resolver, Docker, Zustand, I18n, Astro, Git BASH, GitHub, NestJS, JSON Web Token (JWT), Google Auth.",

        "experience-frontend-date": "2024 - JUNE / DECEMBER",
        "experience-frontend-title": "Junior Frontend Developer",
        "experience-frontend-company": "ID Business Intelligence",
        "experience-frontend-description": "Optimized user experience and frontend development in an ecommerce platform through robust login, real-time personalization, scalable interfaces, and workflow improvements with tools like Redux, Zustand and Storybook.",
        "experience-frontend-skills": "Skills: React.js, React-Router, TypeScript, Redux.js, Zustand, React-hook-form, Yup-Resolver, Postman, Storybook, Algolia.",

        "experience-fullstack-date": "2023-JUNE | 2023-DECEMBER",
        "experience-fullstack-title": "Junior Fullstack Developer",
        "experience-fullstack-company": "Peruvian Dígital",
        "experience-fullstack-description": "Developed secure and efficient APIs with JWT, improved business logic in an ERP, and created dynamic and scalable interfaces with Angular, optimizing user experience and accelerating development.",
        "experience-fullstack-skills": "Skills: AngularJS, Node.js, TypeScript, TypeORM, MySQL, Bootstrap.",

        // Contact
        "contact-title": "Contact Me!",
        "contact-form-name": "Full Name:",
        "contact-form-email": "Email:",
        "contact-form-message": "Message:",
        "contact-form-submit": "Send Message",
        "contact-form-placeholder-name": "Your Name",
        "contact-form-placeholder-email": "email@gmail.com",
        "contact-form-placeholder-message": "Write your message or proposal...",

        "contact-info-location": "Location",
        "contact-info-location-value": "Lima, Peru",
        "contact-info-modality": "Modality",
        "contact-info-modality-remote": "Remote",
        "contact-info-modality-hybrid": "Hybrid",
        "contact-info-modality-onsite": "On-site",
        "contact-info-social": "Social Media",

        "whatsapp-tooltip": "Chat on WhatsApp",

        // Projects
        "project-1-title": "High Rise Tech Labs",
        "project-1-description": "Web-based system for managing software licenses, handling payments, and administering users.",

        "project-2-title": "Event Creation System",
        "project-2-description": "Web application for event management and ticket creation.",

        "project-3-title": "Portfolio",
        "project-3-description": "Personal portfolio of projects and skills.",

        "project-4-title": "User Registration & QR Code",
        "project-4-description": "Web application to register event attendees, generate individual QR codes and scan them to validate attendance in real time.",

        "project-5-title": "Working....",
        "project-5-description": "Mobile application in development",

        // Lenguaje
        "select-language": "Select language",
        "english": "English",
        "united-states": "United States",
        "spanish": "Spanish",
        "spain": "Spain",
    }
}