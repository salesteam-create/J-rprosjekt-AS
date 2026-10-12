// Jærprosjekt AS – landing page prototype

// Sett til true når kunden har bekreftet tak og terrasse som tjenester.
const VIS_UBEKREFTEDE_TJENESTER = false;

if (VIS_UBEKREFTEDE_TJENESTER) {
  document.querySelectorAll('[data-ubekreftet]').forEach((el) => {
    el.hidden = false;
    el.disabled = false;
  });
}

// Mobilmeny
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('hovedmeny');

function closeNav() {
  nav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
  if (open) nav.querySelector('a').focus();
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeNav();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    closeNav();
    navToggle.focus();
  }
});

// Lenker til fremtidige sider (/rehabilitering, /sandnes osv.) finnes ikke i prototypen.
const toast = document.createElement('div');
toast.className = 'toast';
toast.setAttribute('role', 'status');
document.body.appendChild(toast);
let toastTimer;

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="/"]');
  if (!link) return;
  e.preventDefault();
  toast.textContent = `Egen side kommer: ${link.getAttribute('href')}`;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
});

// Video i hero: respekter redusert bevegelse
const heroVideo = document.querySelector('.hero-video');
if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.removeAttribute('autoplay');
  heroVideo.pause();
}

// Filopplasting: vis filnavn
const fileInput = document.getElementById('fil');
const fileDrop = document.querySelector('.file-drop');
const fileText = document.querySelector('.file-drop-text');
const fileDefault = fileText.textContent;

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  fileText.textContent = file ? file.name : fileDefault;
  fileDrop.classList.toggle('has-file', Boolean(file));
});

// Skjema: validering og takkemelding (sendes ikke videre)
const form = document.getElementById('tilbudsskjema');
const success = document.getElementById('takk');

const rules = {
  jobbtype: (v) => (v ? '' : 'Velg hvilken type jobb det gjelder.'),
  sted: (v) => (v.trim() ? '' : 'Skriv postnummer eller sted.'),
  beskrivelse: (v) => (v.trim().length >= 5 ? '' : 'Skriv kort hva som skal gjøres.'),
  navn: (v) => (v.trim() ? '' : 'Skriv navnet ditt.'),
  telefon: (v) => (/^(\+?\d[\d\s]{6,})$/.test(v.trim()) ? '' : 'Skriv et gyldig telefonnummer.'),
  epost: (v) => (!v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Sjekk at e-postadressen er riktig.'),
};

function validateField(name) {
  const input = form.elements[name];
  const message = rules[name](input.value);
  const field = input.closest('.field');
  const error = document.getElementById(`${name}-feil`);
  field.classList.toggle('has-error', Boolean(message));
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  error.textContent = message;
  return !message;
}

Object.keys(rules).forEach((name) => {
  const input = form.elements[name];
  input.addEventListener('blur', () => {
    if (input.value || input.closest('.field').classList.contains('has-error')) validateField(name);
  });
  input.addEventListener('input', () => {
    if (input.closest('.field').classList.contains('has-error')) validateField(name);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const invalid = Object.keys(rules).filter((name) => !validateField(name));
  if (invalid.length) {
    form.elements[invalid[0]].focus();
    return;
  }
  form.hidden = true;
  success.hidden = false;
  success.focus();
});

document.getElementById('ny-henvendelse').addEventListener('click', () => {
  form.reset();
  fileText.textContent = fileDefault;
  fileDrop.classList.remove('has-file');
  success.hidden = true;
  form.hidden = false;
  form.elements.jobbtype.focus();
});
