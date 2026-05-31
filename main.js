import './style.css';
import { data } from './data.js';

let currentLang = 'es';

function renderApp() {
  const d = data[currentLang];
  const flagIcon = currentLang === 'es' 
    ? '<img src="/flag-en.png" alt="EN" style="width: 26px; height: 26px; object-fit: contain; border-radius: 4px;" />' 
    : '<img src="/flag-es.png" alt="ES" style="width: 26px; height: 26px; object-fit: contain; border-radius: 50%;" />';
  const flagText = currentLang === 'es' ? 'EN' : 'ES';

  const appHTML = `
    <header>
      <div class="container">
        <nav class="glass-panel animate-fade-up" style="animation-delay: 0.1s;">
          <a href="#" style="text-decoration: none; display: flex; align-items: center;">
            <img src="/logo.png" alt="JMCB Logo" style="height: 48px; width: auto; border-radius: 50%; box-shadow: 0 0 10px var(--accent-glow);">
          </a>
          <div class="nav-links">
            <a href="#about">${d.nav.about}</a>
            <a href="#tech">${d.nav.tech}</a>
            <a href="#projects">${d.nav.projects}</a>
            <a href="#contact">${d.nav.contact}</a>
          </div>
          <button id="lang-toggle" class="btn-secondary" style="border-radius: 0.5rem; padding: 0.5rem 1rem; display: flex; gap: 0.5rem; align-items: center;">
            <span>${flagIcon}</span> <span style="font-weight: 700; font-size: 0.8rem;">${flagText}</span>
          </button>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <div class="status-badge">
            <div class="status-dot"></div>
            <span class="status-text">${d.hero.status}</span>
          </div>
          <h1 class="hero-title">
            ${d.hero.title} <br/>
            <span class="text-gradient">${d.hero.subtitle}</span>
          </h1>
          <p class="hero-subtitle">
            ${d.hero.description}
          </p>
          <div class="hero-actions" style="justify-content: center;">
            <a href="#projects" class="btn btn-primary">
              ${d.hero.cta} <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
            </a>
            <a href="https://github.com/JMCLABAS" target="_blank" class="btn btn-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jose-maría-clavijo-basáñez" target="_blank" class="btn btn-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <h2 class="section-title">${d.about.title}</h2>
          <div style="max-width: 800px; font-size: 1.1rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
            <p>${d.about.p1}</p>
            <p>${d.about.p2}</p>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section id="tech" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <h2 class="section-title">${d.tech.title}</h2>
          
          <div class="tech-container" style="margin-top: 2rem;">
            ${d.tech.categories.map((category, catIndex) => `
              <article class="tech-category-card animate-fade-up" style="animation-delay: ${0.2 + (catIndex * 0.1)}s;">
                <h3 class="tech-category-title">${category.name}</h3>
                <div class="tech-grid">
                  ${category.items.map(item => `
                    <div class="tech-item">
                      <div class="tech-icon-wrapper">
                        <img src="${item.icon}" alt="${item.name}" loading="lazy" />
                      </div>
                      <span class="tech-label">${item.name}</span>
                    </div>
                  `).join('')}
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="container">
        <div class="animate-fade-up" style="animation-delay: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <h2 class="section-title">${d.projects.title}</h2>
          
          <div class="projects-grid" style="text-align: left; width: 100%;">
            ${d.projects.items.map((project, index) => `
              <div class="project-card glass-panel animate-fade-up" style="animation-delay: ${0.2 + (index * 0.1)}s;">
                ${project.image ? `<img src="${project.image}" alt="${project.title} logo" style="width: 70px; height: 70px; border-radius: 12px; object-fit: contain; margin-bottom: 1.5rem; background: rgba(255, 255, 255, 0.9); padding: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);" />` : ''}
                <span class="project-tag"><i data-lucide="star" style="width: 12px; height: 12px; display: inline; margin-right: 4px;"></i>${project.tag}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="tech-stack">
                  ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                </div>
                <div style="border-top: 1px solid var(--glass-border); padding-top: 1.5rem; display: flex; justify-content: flex-end;">
                  <a href="${project.link}" target="_blank" style="color: var(--accent-hover); text-decoration: none; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; display: flex; align-items: center; gap: 0.5rem;">
                    View Details <i data-lucide="arrow-up-right" style="width: 16px; height: 16px;"></i>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="container" style="margin-bottom: 4rem;">
        <div class="contact-grid animate-fade-up" style="animation-delay: 0.2s;">
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <h2 class="section-title">${d.contact.title}</h2>
            <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 400px; margin: 0 auto;">
              ${d.contact.description}
            </p>
            
            <div class="contact-info" style="align-items: center;">
              <div class="contact-item" style="flex-direction: column; gap: 0.5rem; text-align: center;">
                <div class="contact-icon" style="margin: 0 auto;"><i data-lucide="mail"></i></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:${d.contact.email}">${d.contact.email}</a>
                </div>
              </div>
              <div class="contact-item" style="flex-direction: column; gap: 0.5rem; text-align: center; margin-top: 1.5rem;">
                <div class="contact-icon" style="margin: 0 auto;"><i data-lucide="map-pin"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>${d.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="glass-panel" style="padding: 3rem; text-align: center;">
            <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-muted); margin-bottom: 2rem;">— Let's Connect</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
               <a href="https://github.com/JMCLABAS" target="_blank" class="btn btn-icon" aria-label="GitHub">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
               </a>
               <a href="https://www.linkedin.com/in/jose-maría-clavijo-basáñez" target="_blank" class="btn btn-icon" aria-label="LinkedIn">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
               </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer style="text-align: center;">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Jose María Clavijo Basáñez. All rights reserved.</p>
      </div>
    </footer>
  `;

  document.querySelector('#app').innerHTML = appHTML;

  // Initialize icons
  lucide.createIcons();

  // Re-attach event listener
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    renderApp();
  });
}

// Initial render
renderApp();
