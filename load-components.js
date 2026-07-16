// Load header and footer components
async function loadComponent(elementId, filePath) {
  try {
    // Add cache busting to prevent stale content
    const response = await fetch(filePath + '?v=' + Date.now(), {
      cache: 'no-store'
    });
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;

    // Execute any scripts in the loaded HTML
    const scripts = document.getElementById(elementId).getElementsByTagName('script');
    for (let script of scripts) {
      eval(script.innerHTML);
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
  await loadComponent('header-placeholder', 'header.html');
  if (document.getElementById('sponsor-strip-placeholder')) {
    await loadComponent('sponsor-strip-placeholder', 'sponsor-strip.html');
  }
  await loadComponent('footer-placeholder', 'footer.html');
});

// Rotate hero background images on every page with a hero
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const images = ['images/image.png', 'images/image1.png', 'images/image2.png'];
  images.forEach(src => { new Image().src = src; });

  let current = 0;
  hero.style.backgroundImage = `url('${images[current]}')`;

  setInterval(() => {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
  }, 5000);
});
