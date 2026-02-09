import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        projects: "Projects",
        about: "About",
        contact: "Contact",
        hire_me: "Hire Me"
      },
      hero: {
        system_secure: "System Secure",
        title_1: "Securing Digital",
        title_2: "Infrastructures",
        subtitle: "Certified Cybersecurity Analyst specializing in penetration testing, threat analysis, and robust security architecture. Protecting your assets with offensive security strategies.",
        cta_projects: "View Projects",
        cta_contact: "Contact Me",
        stat_vulns: "Vulnerabilities Patched",
        stat_audits: "Audits Completed",
        threat_blocked: "Threat Blocked",
        defense_init: "System hardening..."
      },
      services: {
        title: "Specialized Services",
        subtitle: "Delivering comprehensive security solutions tailored to your organization's specific threat landscape.",
        pentest: {
          title: "Penetration Testing",
          desc: "Simulated attacks to identify vulnerabilities in web applications and internal infrastructures.",
          item1: "Web Application Testing",
          item2: "Internal Network Assessment"
        },
        assessment: {
          title: "Security Assessments",
          desc: "Evaluating security controls and configurations to identify potential exposure and risk.",
          item1: "Risk Assessment",
          item2: "Configuration Review"
        },
        analysis: {
          title: "Post-Exploitation Analysis",
          desc: "Assessing compromised systems to understand impact, privilege escalation paths, and lateral movement opportunities.",
          item1: "Privilege Escalation",
          item2: "Lateral Movement"
        }
      },
      projects: {
        title: "Recent Projects & Case Studies",
        view_case: "View Case Study",
        p1: {
          title: "Corporate Directory Penetration Test",
          tag: "INFRASTRUCTURE",
          desc: "Identified weaknesses in authentication and directory service configuration within a corporate Windows environment. Leveraged enumeration techniques to escalate privileges and gain full domain access, highlighting risks related to credential exposure and misconfigured services.",
          target_label: "Target",
          target_val: "Domain Services",
          vector_label: "Vector",
          vector_val: "Kerberos Abuse & Credential Reuse",
          status_label: "Status",
          status_val: "COMPROMISED & DOCUMENTED"
        },
        p2: {
          title: "Web Application & API Security Assessment",
          tag: "APPLICATION SECURITY",
          desc: "Conducted a security assessment of a modern web application backed by a REST API. Discovered input validation flaws and improper access controls that allowed unauthorized data access and remote code execution through chained vulnerabilities.",
          scope_label: "Scope",
          scope_val: "Web Application & API",
          vector_label: "Vector",
          vector_val: "Input Validation & Logic Flaws",
          impact_label: "Impact",
          impact_val: "Remote Code Execution"
        }
      },
      arsenal: {
        title: "Technical Arsenal",
        web_security: "Web & Application Security",
        offensive_tools: "Offensive Tools & Systems",
        skills: {
          web_testing: "Web Application Testing",
          owasp: "OWASP Top 10",
          auth_flaws: "Authentication & Session Flaws",
          burp: "Burp Suite",
          linux: "Linux (Parrot / Debian)",
          network_enum: "Network Enumeration (Nmap, DNS)"
        }
      },
      toolkit: {
        title: "Professional Toolkit",
        desc: {
          web_exploit: "Web Exploitation",
          web_fuzz: "Web Fuzzing",
          net_discovery: "Network Discovery",
          ad_recon: "AD Reconnaissance",
          net_exploit: "Network Exploitation",
          llmnr: "LLMNR Poisoning",
          kerberos: "Kerberos Bruteforce",
          scripts: "Python / Bash / Go"
        }
      },
      certifications: {
        title: "Professional Certifications",
        subtitle: "Validated by industry leaders",
        view_cert: "View Certificate",
        oscp: { issuer: "Offensive Security", desc: "Certified Professional" },
        cissp: { issuer: "ISC²", desc: "Systems Security Pro" },
        sec_plus: { issuer: "CompTIA", desc: "Security+" },
        ceh: { issuer: "EC-Council", desc: "Ethical Hacker" }
      },
      about: {
        title: "Behind the Terminal",
        p1: "My interest in cybersecurity grew from a technical curiosity and a natural tendency to question how systems behave under pressure. Coming from a technological and engineering-focused environment, I developed a structured approach to problem-solving, risk analysis, and attention to detail—key foundations in security.",
        p2: "Over time, that mindset evolved into a focus on understanding systems from both a defensive and analytical perspective. I’m especially interested in how vulnerabilities emerge from design decisions, configurations, and real-world usage, and how thoughtful security practices can prevent them.",
        p3: "Today, I continue building and refining my skills in cybersecurity with a practical, hands-on approach. I value clarity, discipline, and continuous improvement, and I’m driven by the challenge of making systems more secure, resilient, and trustworthy.",
        years_exp: "Years Exp.",
        client_base: "Client Base",
        global: "Global"
      },
      contact: {
        title: "Initiate Contact",
        subtitle: "This interface demonstrates secure communication concepts.",
        protocol: "SECURE_TRANSMISSION_PROTOCOL_V4",
        form: {
          name_label: "Identifier (Name)",
          email_label: "Digital_Addr (Email)",
          phone_label: "Comms_Link (Phone)",
          message_label: "Payload (Message)",
          placeholder_name: "John Doe",
          placeholder_email: "john@example.com",
          placeholder_phone: "+1 (XXX) XXX-XXXX",
          placeholder_message: "Enter message...",
          submit_idle: "Transmit Securely",
          submit_loading: "Transmitting...",
          submit_success: "Transmission Successful",
          error_network: "Network error. Transmission failed.",
          error_fail: "Transmission failed. Please retry.",
          invalid: "INVALID",
          validation: {
            name_req: "Identity required.",
            name_chars: "Invalid characters detected in identity.",
            name_short: "Identity too short.",
            email_req: "Digital address required.",
            email_fmt: "Invalid digital address format.",
            phone_chars: "Invalid signal characters detected.",
            phone_short: "Signal sequence too short (min 6 digits).",
            msg_req: "Payload required.",
            msg_short: "Payload insufficient (min 10 chars)."
          }
        },
        pgp: {
          public_key: "PUBLIC_KEY.asc",
          copy: "Copy Public Key"
        },
        security_context: {
          title: "Security Context",
          desc: "Messages are transmitted via HTTPS (TLS). This form does not provide end-to-end encryption. Cryptographic elements shown are for demonstration purposes only."
        }
      },
      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved."
      },
      privacy: {
        title: "Privacy Policy",
        last_updated: "LAST UPDATED: FEBRUARY 2026",
        intro_desc: "This site is designed with privacy in mind. This policy explains what limited data is processed, how it is used, and how it is protected within the context of a personal cybersecurity portfolio.",
        status: {
          label: "Status",
          active: "Active",
          compliance: "Compliance",
          gdpr: "GDPR-aware Design"
        },
        sections: {
          toc: "Table of Contents",
          compliant_badge: "GDPR Compliant",
          intro: {
            title: "Introduction",
            content: "Your privacy is critically important. This is a static portfolio site that minimizes data collection. We do not request personal information unless necessary, do not share it with third parties except to operate essential services (like the contact form), and do not monetize user data."
          },
          collection: {
            title: "Information Collection",
            content: "We collect limited information strictly necessary to respond to contact requests. This includes:",
            tech_title: "Technical Data",
            tech_desc: "Standard server logs (IP address, browser type) managed by our hosting provider (Netlify).",
            personal_title: "Personal Data",
            personal_desc: "Name, email address, and message content voluntarily provided via the contact form."
          },
          usage: {
            title: "How Information is Used",
            li1: "Contact form data is used solely to respond to your inquiries.",
            li2: "No personal data is used for marketing, profiling, or behavioral analytics.",
            li3: "Data is not sold to any third parties."
          },
          retention: {
            title: "Data Retention",
            content: "Contact form submissions are retained in the analyst's email inbox for the duration of the conversation. Server logs are managed by the hosting provider according to their standard retention policies."
          },
          third_party: {
            title: "Third-party Services",
            content: "This website is hosted on Netlify. Contact form submissions are processed by Web3Forms. These services are third-party data processors and operate under their own security and privacy policies. Data submitted via the form flows through their infrastructure."
          },
          cookies: {
            title: "Cookies and Analytics",
            content: "This website does not use tracking cookies or third-party analytics pixels. It is a static application."
          },
          rights: {
            title: "Your Rights",
            content: "Depending on your jurisdiction, you may have rights regarding your personal data, including access, correction, or deletion.",
            r1: "Right to Access",
            r2: "Right to Rectification",
            r3: "Right to Erasure",
            note: "To exercise these rights regarding data submitted via the contact form, please reach out via web forms."
          },
          security: {
            title: "Security Measures",
            card_title: "Transmission Security",
            card_desc: "All traffic to this site is served over HTTPS (TLS). Contact form data is transmitted securely to the processing provider. However, standard web forms are not end-to-end encrypted channels."
          }
        }
      },
      terms: {
        title: "Terms of Service",
        last_updated: "Last updated: FEBRUARY 2026 // DOCUMENT VERSION: 2.0",
        toc: "Table of Contents",
        s1: {
          title: "Introduction",
          content: "By accessing this portfolio, you acknowledge that the content presented is for informational and demonstrative purposes only. This site showcases security-related concepts, learning experiences, and analytical methodologies within a professional portfolio context."
        },
        s2: {
          title: "Usage Policy",
          content: "You are permitted to view and interact with this website for personal and informational purposes only. Any attempt to disrupt the availability, integrity, or normal operation of the site is strictly prohibited.",
          alert_title: "Restricted Action",
          alert_content: "Automated scanning, stress testing, or intentional misuse of this website without explicit authorization is not permitted."
        },
        s3: {
          title: "Disclaimers & Warranties",
          content: "The content provided on this website is for educational and portfolio demonstration purposes only. No guarantees are made regarding the accuracy, completeness, or applicability of the information presented.",
          alert_title: "INFORMATIONAL DISCLAIMER",
          alert_content: "Any actions or implementations derived from the concepts described on this website are performed at your own discretion and risk."
        },
        s4: {
          title: "Jurisdiction",
          content: "These terms and conditions shall be governed by and construed in accordance with the laws applicable in the user's jurisdiction, to the extent permitted by applicable regulations, without regard to conflict of law principles."
        }
      }
    }
  },
  es: {
    translation: {
      header: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre Mí",
        contact: "Contacto",
        hire_me: "Contrátame"
      },
      hero: {
        system_secure: "Sistema Seguro",
        title_1: "Asegurando Infraestructuras",
        title_2: "Digitales",
        subtitle: "Analista de Ciberseguridad Certificado especializado en pruebas de penetración, análisis de amenazas y arquitectura de seguridad robusta. Protegiendo sus activos con estrategias de seguridad ofensiva.",
        cta_projects: "Ver Proyectos",
        cta_contact: "Contactar",
        stat_vulns: "Vulnerabilidades Parcheadas",
        stat_audits: "Auditorías Completadas",
        threat_blocked: "Amenaza Bloqueada",
        defense_init: "Reforzando sistema..."
      },
      services: {
        title: "Servicios Especializados",
        subtitle: "Ofreciendo soluciones de seguridad integrales adaptadas al panorama de amenazas específico de su organización.",
        pentest: {
          title: "Pruebas de Penetración",
          desc: "Ataques simulados para identificar vulnerabilidades en aplicaciones web e infraestructuras internas.",
          item1: "Pruebas de Aplicaciones Web",
          item2: "Evaluación de Red Interna"
        },
        assessment: {
          title: "Evaluaciones de Seguridad",
          desc: "Evaluación de controles y configuraciones de seguridad para identificar exposiciones y riesgos potenciales.",
          item1: "Evaluación de Riesgos",
          item2: "Revisión de Configuración"
        },
        analysis: {
          title: "Análisis Post-Explotación",
          desc: "Evaluación de sistemas comprometidos para entender el impacto, rutas de escalada de privilegios y oportunidades de movimiento lateral.",
          item1: "Escalada de Privilegios",
          item2: "Movimiento Lateral"
        }
      },
      projects: {
        title: "Proyectos Recientes y Casos de Estudio",
        view_case: "Ver Caso de Estudio",
        p1: {
          title: "Prueba de Penetración de Directorio Corporativo",
          tag: "INFRAESTRUCTURA",
          desc: "Se identificaron debilidades en la autenticación y configuración de servicios de directorio en un entorno corporativo Windows. Se aprovecharon técnicas de enumeración para escalar privilegios y obtener acceso total al dominio, destacando riesgos relacionados con la exposición de credenciales.",
          target_label: "Objetivo",
          target_val: "Servicios de Dominio",
          vector_label: "Vector",
          vector_val: "Abuso de Kerberos y Reutilización de Credenciales",
          status_label: "Estado",
          status_val: "COMPROMETIDO Y DOCUMENTADO"
        },
        p2: {
          title: "Evaluación de Seguridad de Aplicación Web y API",
          tag: "SEGURIDAD DE APLICACIONES",
          desc: "Se realizó una evaluación de seguridad de una aplicación web moderna respaldada por una API REST. Se descubrieron fallos de validación de entrada y controles de acceso inadecuados que permitían el acceso no autorizado a datos y la ejecución remota de código.",
          scope_label: "Alcance",
          scope_val: "Aplicación Web y API",
          vector_label: "Vector",
          vector_val: "Validación de Entrada y Fallos Lógicos",
          impact_label: "Impacto",
          impact_val: "Ejecución Remota de Código"
        }
      },
      arsenal: {
        title: "Arsenal Técnico",
        web_security: "Seguridad Web y de Aplicaciones",
        offensive_tools: "Herramientas y Sistemas Ofensivos",
        skills: {
          web_testing: "Pruebas de Aplicaciones Web",
          owasp: "OWASP Top 10",
          auth_flaws: "Fallos de Autenticación y Gestión de Sesiones",
          burp: "Burp Suite",
          linux: "Linux (Parrot / Debian)",
          network_enum: "Enumeración de Red (Nmap, DNS)"
        }
      },
      toolkit: {
        title: "Herramientas Profesionales",
        desc: {
          web_exploit: "Explotación Web",
          web_fuzz: "Fuzzing Web",
          net_discovery: "Descubrimiento de Red",
          ad_recon: "Reconocimiento AD",
          net_exploit: "Explotación de Red",
          llmnr: "Envenenamiento LLMNR",
          kerberos: "Fuerza Bruta Kerberos",
          scripts: "Python / Bash / Go"
        }
      },
      certifications: {
        title: "Certificaciones Profesionales",
        subtitle: "Validado por líderes de la industria",
        view_cert: "Ver Certificado",
        oscp: { issuer: "Offensive Security", desc: "Profesional Certificado" },
        cissp: { issuer: "ISC²", desc: "Profesional en Seguridad de Sistemas" },
        sec_plus: { issuer: "CompTIA", desc: "Security+" },
        ceh: { issuer: "EC-Council", desc: "Hacker Ético" }
      },
      about: {
        title: "Detrás de la Terminal",
        p1: "Mi interés en la ciberseguridad surgió de una curiosidad técnica y una tendencia natural a cuestionar cómo se comportan los sistemas bajo presión. Con formación en un entorno tecnológico y orientado a la ingeniería, desarrollé un enfoque estructurado para la resolución de problemas, el análisis de riesgos y la atención al detalle—fundamentos clave en seguridad.",
        p2: "Con el tiempo, esa mentalidad evolucionó hacia un enfoque en comprender los sistemas desde una perspectiva tanto defensiva como analítica. Me interesa especialmente cómo las vulnerabilidades surgen a partir de decisiones de diseño, configuraciones y uso en el mundo real, y cómo las prácticas de seguridad reflexivas pueden prevenirlas.",
        p3: "Hoy, continúo construyendo y perfeccionando mis habilidades en ciberseguridad con un enfoque práctico. Valoro la claridad, la disciplina y la mejora continua, y me impulsa el desafío de hacer que los sistemas sean más seguros, resilientes y confiables.",
        years_exp: "Años Exp.",
        client_base: "Base de Clientes",
        global: "Global"
      },
      contact: {
        title: "Iniciar Contacto",
        subtitle: "Esta interfaz demuestra conceptos de comunicación segura.",
        protocol: "PROTOCOLO_DE_TRANSMISION_SEGURO_V4",
        form: {
          name_label: "Identificador (Nombre)",
          email_label: "Dir_Digital (Email)",
          phone_label: "Enlace_Coms (Teléfono)",
          message_label: "Carga Útil (Mensaje)",
          placeholder_name: "Juan Pérez",
          placeholder_email: "juan@ejemplo.com",
          placeholder_phone: "+34 (XXX) XXX-XXXX",
          placeholder_message: "Ingrese mensaje...",
          submit_idle: "Enviar Mensaje",
          submit_loading: "Enviando...",
          submit_success: "Transmisión Exitosa",
          error_network: "Error de red. Transmisión Fallida.",
          error_fail: "Transmisión fallida. Por favor reintente.",
          invalid: "INVÁLIDO",
          validation: {
            name_req: "Identidad requerida.",
            name_chars: "Caracteres inválidos detectados.",
            name_short: "Identidad demasiado corta.",
            email_req: "Dirección digital requerida.",
            email_fmt: "Formato de dirección inválido.",
            phone_chars: "Caracteres de señal inválidos.",
            phone_short: "Secuencia de señal muy corta (min 6 dígitos).",
            msg_req: "Carga útil requerida.",
            msg_short: "Carga útil insuficiente (min 10 chars)."
          }
        },
        pgp: {
          public_key: "CLAVE_PUBLICA.asc",
          copy: "Copiar Clave Pública"
        },
        security_context: {
          title: "Contexto de Seguridad",
          desc: "Los mensajes se transmiten vía HTTPS (TLS). Este formulario no ofrece cifrado de extremo a extremo. Los elementos criptográficos mostrados son solo para fines demostrativos."
        }
      },
      footer: {
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        rights: "Todos los derechos reservados."
      },
      privacy: {
        title: "Política de Privacidad",
        last_updated: "ÚLTIMA ACTUALIZACIÓN: FEBRERO 2026",
        intro_desc: "Este sitio está diseñado pensando en la privacidad. Esta política explica qué datos limitados se procesan, cómo se utilizan y cómo se protegen en el contexto de un portafolio personal de ciberseguridad.",
        status: {
          label: "Estado",
          active: "Activo",
          compliance: "Cumplimiento",
          gdpr: "Diseño compatible con GDPR"
        },
        sections: {
          toc: "Tabla de Contenidos",
          compliant_badge: "Cumple con GDPR",
          intro: {
            title: "Introducción",
            content: "Su privacidad es importante. Este es un sitio estático que minimiza la recopilación de datos. No solicitamos información personal a menos que sea necesaria, no la compartimos con terceros excepto cuando lo exija la ley o para operar servicios esenciales (como el formulario), y no vendemos datos."
          },
          collection: {
            title: "Recopilación de Información",
            content: "Recopilamos información limitada estrictamente necesaria para responder a solicitudes de contacto. Esto incluye:",
            tech_title: "Datos Técnicos",
            tech_desc: "Registros estándar del servidor (IP, navegador) gestionados por el proveedor de alojamiento (Netlify).",
            personal_title: "Datos Personales",
            personal_desc: "Nombre, email y contenido del mensaje proporcionado voluntariamente a través del formulario."
          },
          usage: {
            title: "Cómo se Utiliza la Información",
            li1: "La información del formulario se utiliza únicamente para responder a consultas.",
            li2: "No se utilizan datos personales para marketing, elaboración de perfiles o análisis de comportamiento.",
            li3: "La información personal no se vende a terceros."
          },
          retention: {
            title: "Retención de Datos",
            content: "Los envíos de formularios se conservan en la bandeja de entrada del analista durante la conversación. Los registros del servidor son gestionados por el proveedor de infraestructura según sus políticas estándar."
          },
          third_party: {
            title: "Servicios de Terceros",
            content: "Este sitio web está alojado en Netlify. Los formularios son procesados por Web3Forms. Estos servicios son procesadores de datos externos y operan bajo sus propias políticas de seguridad y privacidad."
          },
          cookies: {
            title: "Cookies y Analítica",
            content: "Este sitio web no utiliza cookies de seguimiento ni análisis de terceros. Es una aplicación estática."
          },
          rights: {
            title: "Sus Derechos",
            content: "Dependiendo de su jurisdicción, puede tener ciertos derechos con respecto a sus datos personales, incluido el derecho a solicitar acceso, corrección o eliminación.",
            r1: "Derecho de Acceso",
            r2: "Derecho de Rectificación",
            r3: "Derecho de Supresión",
            note: "Para ejercer estos derechos sobre los datos enviados vía formulario, por favor contacte a través del formulario."
          },
          security: {
            title: "Medidas de Seguridad",
            card_title: "Seguridad de la Transmisión",
            card_desc: "Todo el tráfico se sirve mediante HTTPS (TLS). Los datos del formulario se transmiten de forma segura al proveedor. Sin embargo, el formulario web no es un canal cifrado de extremo a extremo."
          }
        }
      },
      terms: {
        title: "Términos de Servicio",
        last_updated: "Última actualización: FEBRERO 2026 // VERSIÓN DEL DOCUMENTO: 2.0",
        toc: "Tabla de Contenidos",
        s1: {
          title: "Introducción",
          content: "Al acceder a este portafolio, usted reconoce que el contenido presentado tiene únicamente fines informativos y demostrativos. Este sitio muestra conceptos relacionados con la seguridad, experiencias de aprendizaje y metodologías de análisis dentro de un contexto profesional de portafolio."
        },
        s2: {
          title: "Política de Uso",
          content: "Se le permite visualizar e interactuar con este sitio web únicamente con fines personales e informativos. Cualquier intento de interrumpir la disponibilidad, integridad o el funcionamiento normal del sitio está estrictamente prohibido.",
          alert_title: "Acción Restringida",
          alert_content: "No se permite el escaneo automatizado, pruebas de estrés o el uso indebido intencional de este sitio web sin autorización explícita."
        },
        s3: {
          title: "Exenciones de Responsabilidad y Garantías",
          content: "El contenido proporcionado en este sitio web es únicamente para fines educativos y de demostración en un portafolio. No se ofrecen garantías sobre la exactitud, integridad o aplicabilidad de la información presentada.",
          alert_title: "DESCARGO DE RESPONSABILIDAD INFORMATIVO",
          alert_content: "Cualquier acción o implementación derivada de los conceptos descritos en este sitio web se realiza bajo su propia discreción y riesgo."
        },
        s4: {
          title: "Jurisdicción",
          content: "Estos términos y condiciones se rigen por las leyes vigentes del país o región del usuario, siempre que la ley lo permita, y sin aplicar normas sobre conflictos entre distintas legislaciones."
        }
      }
    }
  }
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;