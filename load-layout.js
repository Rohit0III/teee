function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Error loading ${file}`);
        return response.text();
      })
      .then(html => el.innerHTML = html)
      .catch(err => console.error('Include Error:', err));
  });
}

// Run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', includeHTML);
