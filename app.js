/**
 * MAIN INTERACTIVE APPLICATION SCRIPT
 * Renders data dynamically from constants.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not found in constants.js');
    return;
  }

  // 1. Render Play Store Apps
  renderApps(data.apps);

  // 2. Render Enterprise Web Projects (nuTRAACS)
  renderWebProjects(data.webProjects);

  // 3. Render Work Experience Timeline
  renderExperience(data.experience);

  // 4. Render Skills
  renderSkills(data.skills);

  // 5. Setup Interactive Event Listeners (Clipboard, Mobile Menu, Modals)
  setupInteractions();

  // 6. Set dynamic year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/**
 * Render Published Mobile Apps Grid
 */
function renderApps(apps) {
  const container = document.getElementById('apps-container');
  if (!container || !apps) return;

  container.innerHTML = apps.map(app => {
    const admobBadge = app.isAdmobVerified
      ? `<span class="admob-badge-verified" title="Verified in app-ads.txt">&#10003; AdMob Verified</span>`
      : '';

    const highlightsList = app.highlights && app.highlights.length
      ? `<ul class="app-highlights">
          ${app.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>`
      : '';

    const techTags = app.techStack && app.techStack.length
      ? `<div class="app-tech-tags">
          ${app.techStack.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>`
      : '';

    const privacyBtn = app.privacyPolicyUrl
      ? `<button class="btn-privacy" onclick="openPrivacyModal()">Privacy Policy</button>`
      : '';

    const fallbackInitials = app.title.split(' ').map(w => w[0]).slice(0, 2).join('');

    return `
      <article class="app-card" id="card-${app.id}">
        <div class="app-card-top">
          <div class="app-icon-wrapper">
            <img 
              src="${escapeHtml(app.icon)}" 
              alt="${escapeHtml(app.title)} Icon" 
              class="app-icon-img"
              onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#312e81;color:#a5b4fc;font-weight:700;font-size:1.4rem;\'>${fallbackInitials}</div>';"
            >
          </div>
          <div class="app-heading-wrap">
            <div class="app-badge-row">
              <span class="app-badge-pill">${escapeHtml(app.platform)}</span>
              ${admobBadge}
            </div>
            <h3 class="app-title">${escapeHtml(app.title)}</h3>
            <span class="app-category">${escapeHtml(app.category)}</span>
          </div>
        </div>

        <p class="app-desc">${escapeHtml(app.shortDescription)}</p>
        
        ${highlightsList}
        ${techTags}

        <div class="app-actions">
          <a href="${escapeHtml(app.storeUrl)}" target="_blank" rel="noopener noreferrer" class="btn-store">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.22-.387l-.007-.021V2.222a2.38 2.38 0 0 1 .226-.408zm11.24 11.24l2.585-2.585-11.83-6.83 9.245 9.415zm0 1.892L5.604 24.36l11.83-6.83-2.585-2.585zm1.467-1.467l4.022-2.322a1.44 1.44 0 0 0 0-2.314l-4.022-2.322-2.073 2.073 2.073 2.073z"/>
            </svg>
            Play Store
          </a>
          ${privacyBtn}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Render Enterprise Web Projects (nuTRAACS)
 */
function renderWebProjects(projects) {
  const container = document.getElementById('web-projects-container');
  if (!container || !projects) return;

  container.innerHTML = projects.map(proj => {
    const highlights = proj.highlights && proj.highlights.length
      ? `<ul class="web-highlights">
          ${proj.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>`
      : '';

    const techTags = proj.techStack && proj.techStack.length
      ? `<div class="app-tech-tags" style="margin-bottom: 24px;">
          ${proj.techStack.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>`
      : '';

    return `
      <article class="web-card" id="card-${proj.id}">
        <div class="web-card-info">
          <div class="web-header-row">
            <div class="web-logo-box">
              <img 
                src="${escapeHtml(proj.icon)}" 
                alt="${escapeHtml(proj.title)} Logo" 
                style="width: 100%; height: 100%; object-fit: contain; padding: 6px;"
                onerror="this.onerror=null; this.parentElement.innerHTML='<span style=\'color:#38bdf8;font-weight:800;font-size:1.2rem;\'>nu</span>';"
              >
            </div>
            <div>
              <h3 class="web-title">${escapeHtml(proj.title)}</h3>
              <p class="web-role-subtitle">${escapeHtml(proj.role)}</p>
            </div>
          </div>
          <p class="web-company-name">${escapeHtml(proj.company)} &bull; ${escapeHtml(proj.category)}</p>
          <p class="web-desc">${escapeHtml(proj.shortDescription)}</p>
          
          <a href="${escapeHtml(proj.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:inline-flex; width:auto;">
            Visit Live Platform &nearr;
          </a>
        </div>

        <div class="web-card-features">
          <h4 style="font-size: 1.05rem; color: #fff; margin-bottom: 14px; font-weight: 700;">Key Architectural Contributions</h4>
          ${highlights}
          ${techTags}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Render Experience Timeline
 */
function renderExperience(experiences) {
  const container = document.getElementById('experience-container');
  if (!container || !experiences) return;

  container.innerHTML = experiences.map((exp, index) => `
    <div class="timeline-item" id="exp-${index}">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <span class="timeline-period">${escapeHtml(exp.period)}</span>
        <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
        <p class="timeline-company">${escapeHtml(exp.company)} &bull; ${escapeHtml(exp.location)}</p>
        <p class="timeline-summary">${escapeHtml(exp.summary)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Render Skills Grid
 */
function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container || !skills) return;

  const categories = [
    { title: "Frontend & Angular Ecosystem", icon: "🌐", items: skills.frontend || [] },
    { title: "Mobile & Cross-Platform", icon: "📱", items: skills.mobile || [] },
    { title: "Tools, Backend & Architecture", icon: "⚙️", items: skills.toolsAndBackend || [] }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">
        <span>${cat.icon}</span> ${escapeHtml(cat.title)}
      </h3>
      <div class="skill-pills">
        ${cat.items.map(s => `
          <div class="skill-pill" title="Proficiency: ${escapeHtml(s.level)}">
            ${escapeHtml(s.name)}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Setup Event Listeners
 */
function setupInteractions() {
  // Copy AdMob snippet to clipboard
  const copyBtn = document.getElementById('btn-copy-admob');
  const codeEl = document.getElementById('app-ads-code');

  if (copyBtn && codeEl) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeEl.textContent.trim());
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#10b981';
        copyBtn.style.color = '#064e3b';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close when clicking a nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Privacy Policy modal controls
  const modal = document.getElementById('privacy-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const okBtn = document.getElementById('modal-ok-btn');
  const footerPrivacyLink = document.getElementById('footer-privacy-link');

  if (modal) {
    const closeModal = () => modal.classList.remove('active');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (okBtn) okBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (footerPrivacyLink) {
      footerPrivacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openPrivacyModal();
      });
    }
  }
}

/**
 * Global function to open Privacy Policy modal
 */
window.openPrivacyModal = function() {
  const modal = document.getElementById('privacy-modal');
  if (modal) {
    modal.classList.add('active');
  }
};

/**
 * Utility: HTML escape
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
