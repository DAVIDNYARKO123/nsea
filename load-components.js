// Load header and footer components
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
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
  await loadComponent('footer-placeholder', 'footer.html');
});
