(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const l={es:{nav:{about:"Sobre Mí",projects:"Proyectos",contact:"Contacto",resume:"Currículum"},hero:{status:"Disponible para trabajar",title:"Jose María",subtitle:"Clavijo Basáñez",description:"Ingeniero Informático - Ingeniería de Computadores por la Universidad de Sevilla. Construyo soluciones robustas de software, desde aplicaciones móviles en tiempo real hasta modelos de inteligencia artificial y arquitecturas en la nube.",cta:"Ver Proyectos",github:"GitHub",linkedin:"LinkedIn"},about:{title:"Sobre Mí",p1:"Soy un Ingeniero Informático especializado en Ingeniería de Computadores por la Universidad de Sevilla. Me apasiona resolver problemas complejos mediante el desarrollo de software, ya sea optimizando el rendimiento de aplicaciones móviles o desplegando arquitecturas serverless.",p2:"Además de mis proyectos personales, soy miembro activo de la Asociación IoTUS, donde colaboro con otros apasionados de la tecnología para desarrollar soluciones innovadoras."},projects:{title:"Proyectos Destacados",subtitle:"Trabajos seleccionados",items:[{id:"birrometro",title:"Birrómetro",tag:"Mobile App Destacada",description:"App móvil multiplataforma nativa (iOS/Android) diseñada para el registro, análisis estadístico y gamificación del consumo social de bebidas. Incluye dinámicas en tiempo real (estilo BeReal), geolocalización, analíticas masivas (estilo Spotify Wrapped) y ecosistema de monetización híbrida.",tech:["React Native","TypeScript","Firebase","Expo","RevenueCat","Google AdMob","Google Maps"],link:"#"},{id:"safesite",title:"SafeSite AI",tag:"Computer Vision",description:"Sistema de visión artificial en tiempo real que automatiza la supervisión de seguridad en entornos industriales. Utiliza YOLOv11 para verificar el uso correcto de Equipos de Protección Personal (cascos y chalecos).",tech:["Python 3.11","YOLOv11","OpenCV","PyTorch","Active Learning"],link:"https://github.com/JMCLABAS/SafeSite-AI"},{id:"running",title:"Running League",tag:"Flutter App",description:"Aplicación móvil que gamifica la experiencia de correr. Permite crear ligas privadas, competir con amigos y escalar en rankings automatizados gestionados en la nube con árbitros Serverless.",tech:["Flutter","Dart","Firebase","SQLite","Serverless"],link:"https://github.com/JMCLABAS/running_league"},{id:"aws",title:"AWS E-commerce Microservices",tag:"Cloud Architecture",description:"Arquitectura de e-commerce construida mediante microservicios Serverless en AWS. Cuenta con despliegues automatizados (CI/CD) ejecutando Terraform.",tech:["AWS","DynamoDB","S3","Terraform","GitHub Actions","Serverless"],link:"https://github.com/JMCLABAS/aws-ecommerce-microservices"}]},contact:{title:"Ponte en contacto",description:"¿Tienes un proyecto o quieres hablar sobre una oportunidad? Escríbeme.",email:"jose-maría-clavijo-basáñez@linkedin.com",location:"Sevilla, España"}},en:{nav:{about:"About Me",projects:"Projects",contact:"Contact",resume:"Resume"},hero:{status:"Available for work",title:"Jose María",subtitle:"Clavijo Basáñez",description:"Computer Engineer from the University of Seville. I build robust software solutions, from real-time mobile applications to artificial intelligence models and cloud architectures.",cta:"View Projects",github:"GitHub",linkedin:"LinkedIn"},about:{title:"About Me",p1:"I am a Computer Engineer specializing in Computer Engineering from the University of Seville. I am passionate about solving complex problems through software development, whether optimizing mobile app performance or deploying serverless architectures.",p2:"In addition to my personal projects, I am an active member of the IoTUS Association, where I collaborate with other technology enthusiasts to develop innovative solutions."},projects:{title:"Featured Projects",subtitle:"Selected works",items:[{id:"birrometro",title:"Birrómetro",tag:"Featured Mobile App",description:"Native cross-platform mobile app (iOS/Android) designed for tracking, statistical analysis, and gamification of social drink consumption. Includes real-time dynamics (BeReal style), geolocation, massive analytics (Spotify Wrapped style), and a hybrid monetization ecosystem.",tech:["React Native","TypeScript","Firebase","Expo","RevenueCat","Google AdMob","Google Maps"],link:"#"},{id:"safesite",title:"SafeSite AI",tag:"Computer Vision",description:"Real-time computer vision system that automates safety monitoring in industrial environments. Uses YOLOv11 to verify correct usage of Personal Protective Equipment (helmets and vests).",tech:["Python 3.11","YOLOv11","OpenCV","PyTorch","Active Learning"],link:"https://github.com/JMCLABAS/SafeSite-AI"},{id:"running",title:"Running League",tag:"Flutter App",description:"Mobile application that gamifies the running experience. Allows users to create private leagues, compete with friends, and climb automated rankings managed in the cloud with Serverless referees.",tech:["Flutter","Dart","Firebase","SQLite","Serverless"],link:"https://github.com/JMCLABAS/running_league"},{id:"aws",title:"AWS E-commerce Microservices",tag:"Cloud Architecture",description:"E-commerce architecture built using Serverless microservices on AWS. Features automated deployments (CI/CD) running Terraform.",tech:["AWS","DynamoDB","S3","Terraform","GitHub Actions","Serverless"],link:"https://github.com/JMCLABAS/aws-ecommerce-microservices"}]},contact:{title:"Get in touch",description:"Do you have a project or want to discuss an opportunity? Drop me a line.",email:"jose-maría-clavijo-basáñez@linkedin.com",location:"Seville, Spain"}}};let o="es";function c(){const e=l[o],a=o==="es"?"🇬🇧":"🇪🇸",r=o==="es"?"EN":"ES",n=`
    <header>
      <div class="container">
        <nav class="glass-panel animate-fade-up" style="animation-delay: 0.1s;">
          <a href="#" style="text-decoration: none; color: white;">
            <h1 style="font-weight: 900; letter-spacing: -1px; font-size: 1.5rem;">
              JM<span style="color: var(--accent-color);">.</span>
            </h1>
          </a>
          <div class="nav-links">
            <a href="#about">${e.nav.about}</a>
            <a href="#projects">${e.nav.projects}</a>
            <a href="#contact">${e.nav.contact}</a>
          </div>
          <button id="lang-toggle" class="btn-secondary" style="border-radius: 0.5rem; padding: 0.5rem 1rem; display: flex; gap: 0.5rem; align-items: center;">
            <span>${a}</span> <span style="font-weight: 700; font-size: 0.8rem;">${r}</span>
          </button>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s;">
          <div class="status-badge">
            <div class="status-dot"></div>
            <span class="status-text">${e.hero.status}</span>
          </div>
          <h1 class="hero-title">
            ${e.hero.title} <br/>
            <span class="text-gradient">${e.hero.subtitle}</span>
          </h1>
          <p class="hero-subtitle">
            ${e.hero.description}
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">
              ${e.hero.cta} <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
            </a>
            <a href="https://github.com/JMCLABAS" target="_blank" class="btn btn-icon" title="${e.hero.github}">
              <i data-lucide="github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jose-maría-clavijo-basáñez" target="_blank" class="btn btn-icon" title="${e.hero.linkedin}">
              <i data-lucide="linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s;">
          <span class="section-tag">01 // ${e.nav.about}</span>
          <h2 class="section-title">${e.about.title}</h2>
          <div style="max-width: 800px; font-size: 1.1rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 1.5rem;">
            <p>${e.about.p1}</p>
            <p>${e.about.p2}</p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s;">
          <span class="section-tag">02 // ${e.nav.projects}</span>
          <h2 class="section-title">${e.projects.title}</h2>
          
          <div class="projects-grid">
            ${e.projects.items.map((t,i)=>`
              <div class="project-card glass-panel animate-fade-up" style="animation-delay: ${.2+i*.1}s;">
                <span class="project-tag"><i data-lucide="star" style="width: 12px; height: 12px; display: inline; margin-right: 4px;"></i>${t.tag}</span>
                <h3 class="project-title">${t.title}</h3>
                <p class="project-desc">${t.description}</p>
                <div class="tech-stack">
                  ${t.tech.map(s=>`<span class="tech-pill">${s}</span>`).join("")}
                </div>
                <div style="border-top: 1px solid var(--glass-border); padding-top: 1.5rem; display: flex; justify-content: flex-end;">
                  <a href="${t.link}" target="_blank" style="color: var(--accent-hover); text-decoration: none; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; display: flex; align-items: center; gap: 0.5rem;">
                    View Details <i data-lucide="arrow-up-right" style="width: 16px; height: 16px;"></i>
                  </a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="container" style="margin-bottom: 4rem;">
        <div class="contact-grid animate-fade-up" style="animation-delay: 0.2s;">
          <div>
            <span class="section-tag">03 // ${e.nav.contact}</span>
            <h2 class="section-title">${e.contact.title}</h2>
            <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 400px;">
              ${e.contact.description}
            </p>
            
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon"><i data-lucide="mail"></i></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:${e.contact.email}">${e.contact.email}</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon"><i data-lucide="map-pin"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>${e.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="glass-panel" style="padding: 3rem;">
            <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-muted); margin-bottom: 2rem;">— Let's Connect</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
               <a href="https://github.com/JMCLABAS" target="_blank" class="btn btn-secondary" style="flex: 1; justify-content: center;">
                 <i data-lucide="github"></i> GitHub
               </a>
               <a href="https://www.linkedin.com/in/jose-maría-clavijo-basáñez" target="_blank" class="btn btn-secondary" style="flex: 1; justify-content: center;">
                 <i data-lucide="linkedin"></i> LinkedIn
               </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Jose María Clavijo Basáñez. All rights reserved.</p>
      </div>
    </footer>
  `;document.querySelector("#app").innerHTML=n,lucide.createIcons(),document.getElementById("lang-toggle").addEventListener("click",()=>{o=o==="es"?"en":"es",c()})}c();
