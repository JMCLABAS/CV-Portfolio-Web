export const data = {
  es: {
    nav: {
      about: "Sobre Mí",
      tech: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Currículum"
    },
    hero: {
      status: "Disponible para trabajar",
      title: "Jose María",
      subtitle: "Clavijo Basáñez",
      description: "Ingeniero Informático - Ingeniería de Computadores por la Universidad de Sevilla. Construyo soluciones robustas de software, desde aplicaciones móviles en tiempo real hasta modelos de inteligencia artificial y arquitecturas en la nube.",
      cta: "Ver Proyectos",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy un Ingeniero Informático especializado en Ingeniería de Computadores por la Universidad de Sevilla. Me apasiona resolver problemas complejos mediante el desarrollo de software, ya sea optimizando el rendimiento de aplicaciones móviles o desplegando arquitecturas serverless.",
      p2: "Además de mis proyectos personales, soy miembro activo de la Asociación IoTUS, donde colaboro con otros apasionados de la tecnología para desarrollar soluciones innovadoras."
    },
    tech: {
      title: "Tecnologías",
      categories: [
        {
          name: "Mobile & Frontend",
          items: [
            { name: "React Native", icon: "https://api.iconify.design/logos:react.svg" },
            { name: "Expo", icon: "https://api.iconify.design/logos:expo-icon.svg" },
            { name: "Flutter", icon: "https://api.iconify.design/logos:flutter.svg" },
            { name: "Dart", icon: "https://api.iconify.design/logos:dart.svg" }
          ]
        },
        {
          name: "Backend & Cloud",
          items: [
            { name: "Firebase", icon: "https://api.iconify.design/logos:firebase.svg" },
            { name: "AWS", icon: "https://api.iconify.design/logos:aws.svg" },
            { name: "Serverless", icon: "https://api.iconify.design/logos:serverless.svg" },
            { name: "DynamoDB", icon: "https://api.iconify.design/logos:aws-dynamodb.svg" }
          ]
        },
        {
          name: "IA & Herramientas",
          items: [
            { name: "Python", icon: "https://api.iconify.design/logos:python.svg" },
            { name: "PyTorch", icon: "https://api.iconify.design/logos:pytorch-icon.svg" },
            { name: "OpenCV", icon: "https://api.iconify.design/logos:opencv.svg" },
            { name: "Terraform", icon: "https://api.iconify.design/logos:terraform-icon.svg" }
          ]
        }
      ]
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Trabajos seleccionados",
      items: [
        {
          id: "birrometro",
          title: "Birrómetro",
          tag: "Mobile App Destacada",
          image: "./birrometro.png",
          description: "App móvil multiplataforma nativa (iOS/Android) diseñada para el registro, análisis estadístico y gamificación del consumo social de bebidas. Incluye dinámicas en tiempo real (estilo BeReal), geolocalización, analíticas masivas (estilo Spotify Wrapped) y ecosistema de monetización híbrida.",
          tech: ["React Native", "TypeScript", "Firebase", "Expo", "RevenueCat", "Google AdMob", "Google Maps"],
          link: "#"
        },
        {
          id: "safesite",
          title: "SafeSite AI",
          tag: "Computer Vision",
          image: "./safesite.png",
          description: "Sistema de visión artificial en tiempo real que automatiza la supervisión de seguridad en entornos industriales. Utiliza YOLOv11 para verificar el uso correcto de Equipos de Protección Personal (cascos y chalecos).",
          tech: ["Python 3.11", "YOLOv11", "OpenCV", "PyTorch", "Active Learning"],
          link: "https://github.com/JMCLABAS/SafeSite-AI"
        },
        {
          id: "running",
          title: "Running League",
          tag: "Flutter App",
          image: "./running.png",
          description: "Aplicación móvil que gamifica la experiencia de correr. Permite crear ligas privadas, competir con amigos y escalar en rankings automatizados gestionados en la nube con árbitros Serverless.",
          tech: ["Flutter", "Dart", "Firebase", "SQLite", "Serverless"],
          link: "https://github.com/JMCLABAS/running_league"
        },
        {
          id: "aws",
          title: "AWS E-commerce Microservices",
          tag: "Cloud Architecture",
          image: "./aws.png",
          description: "Arquitectura de e-commerce construida mediante microservicios Serverless en AWS. Cuenta con despliegues automatizados (CI/CD) ejecutando Terraform.",
          tech: ["AWS", "DynamoDB", "S3", "Terraform", "GitHub Actions", "Serverless"],
          link: "https://github.com/JMCLABAS/aws-ecommerce-microservices"
        }
      ]
    },
    contact: {
      title: "Ponte en contacto",
      description: "¿Tienes un proyecto o quieres hablar sobre una oportunidad? Escríbeme.",
      email: "pclavijobasanez@gmail.com", 
      location: "Sevilla, España"
    }
  },
  en: {
    nav: {
      about: "About Me",
      tech: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume"
    },
    hero: {
      status: "Available for work",
      title: "Jose María",
      subtitle: "Clavijo Basáñez",
      description: "Computer Engineer from the University of Seville. I build robust software solutions, from real-time mobile applications to artificial intelligence models and cloud architectures.",
      cta: "View Projects",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    about: {
      title: "About Me",
      p1: "I am a Computer Engineer specializing in Computer Engineering from the University of Seville. I am passionate about solving complex problems through software development, whether optimizing mobile app performance or deploying serverless architectures.",
      p2: "In addition to my personal projects, I am an active member of the IoTUS Association, where I collaborate with other technology enthusiasts to develop innovative solutions."
    },
    tech: {
      title: "Technologies",
      categories: [
        {
          name: "Mobile & Frontend",
          items: [
            { name: "React Native", icon: "https://api.iconify.design/logos:react.svg" },
            { name: "Expo", icon: "https://api.iconify.design/logos:expo-icon.svg" },
            { name: "Flutter", icon: "https://api.iconify.design/logos:flutter.svg" },
            { name: "Dart", icon: "https://api.iconify.design/logos:dart.svg" }
          ]
        },
        {
          name: "Backend & Cloud",
          items: [
            { name: "Firebase", icon: "https://api.iconify.design/logos:firebase.svg" },
            { name: "AWS", icon: "https://api.iconify.design/logos:aws.svg" },
            { name: "Serverless", icon: "https://api.iconify.design/logos:serverless.svg" },
            { name: "DynamoDB", icon: "https://api.iconify.design/logos:aws-dynamodb.svg" }
          ]
        },
        {
          name: "AI & Tools",
          items: [
            { name: "Python", icon: "https://api.iconify.design/logos:python.svg" },
            { name: "PyTorch", icon: "https://api.iconify.design/logos:pytorch-icon.svg" },
            { name: "OpenCV", icon: "https://api.iconify.design/logos:opencv.svg" },
            { name: "Terraform", icon: "https://api.iconify.design/logos:terraform-icon.svg" }
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected works",
      items: [
        {
          id: "birrometro",
          title: "Birrómetro",
          tag: "Featured Mobile App",
          image: "./birrometro.png",
          description: "Native cross-platform mobile app (iOS/Android) designed for tracking, statistical analysis, and gamification of social drink consumption. Includes real-time dynamics (BeReal style), geolocation, massive analytics (Spotify Wrapped style), and a hybrid monetization ecosystem.",
          tech: ["React Native", "TypeScript", "Firebase", "Expo", "RevenueCat", "Google AdMob", "Google Maps"],
          link: "#"
        },
        {
          id: "safesite",
          title: "SafeSite AI",
          tag: "Computer Vision",
          image: "./safesite.png",
          description: "Real-time computer vision system that automates safety monitoring in industrial environments. Uses YOLOv11 to verify correct usage of Personal Protective Equipment (helmets and vests).",
          tech: ["Python 3.11", "YOLOv11", "OpenCV", "PyTorch", "Active Learning"],
          link: "https://github.com/JMCLABAS/SafeSite-AI"
        },
        {
          id: "running",
          title: "Running League",
          tag: "Flutter App",
          image: "./running.png",
          description: "Mobile application that gamifies the running experience. Allows users to create private leagues, compete with friends, and climb automated rankings managed in the cloud with Serverless referees.",
          tech: ["Flutter", "Dart", "Firebase", "SQLite", "Serverless"],
          link: "https://github.com/JMCLABAS/running_league"
        },
        {
          id: "aws",
          title: "AWS E-commerce Microservices",
          tag: "Cloud Architecture",
          image: "./aws.png",
          description: "E-commerce architecture built using Serverless microservices on AWS. Features automated deployments (CI/CD) running Terraform.",
          tech: ["AWS", "DynamoDB", "S3", "Terraform", "GitHub Actions", "Serverless"],
          link: "https://github.com/JMCLABAS/aws-ecommerce-microservices"
        }
      ]
    },
    contact: {
      title: "Get in touch",
      description: "Do you have a project or want to discuss an opportunity? Drop me a line.",
      email: "pclavijobasanez@gmail.com",
      location: "Seville, Spain"
    }
  }
};
