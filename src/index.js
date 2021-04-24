import './styles.css';
import menu from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('body-theme') === 'dark-theme') {
  themeSwitchRef.checked = true;
  document.querySelector('body').classList.add(Theme.DARK);
}

themeSwitchRef.addEventListener('change', e => {
  if (themeSwitchRef.checked) {
    document.querySelector('body').classList.add(Theme.DARK);
    localStorage.setItem('body-theme', Theme.DARK);
  } else {
    document.querySelector('body').classList.remove(Theme.DARK);
    localStorage.setItem('body-theme', Theme.LIGHT);
  }
});

const menuContainerRef = document.querySelector('.js-menu');
const menuMarkup = menuTemplate(menu);

menuContainerRef.insertAdjacentHTML('beforeend', menuMarkup);
