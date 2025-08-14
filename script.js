const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación de corazones y flor
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
      heart.style.display = 'block';
    });
    const flower = document.querySelector('.flower');
    flower.style.display = 'block';

  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Animación de corazones y flor
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => heart.style.display = 'none');
    const flower = document.querySelector('.flower');
    flower.style.display = 'none';
  }, 500);
});

const catElement = document.querySelector('.cat-front');

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  
  catElement.classList.add('cat-up'); // gatito sube
  
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
      heart.style.display = 'block';
    });
    const flower = document.querySelector('.flower');
    flower.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;
  
  catElement.classList.remove('cat-up'); // gatito baja

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => heart.style.display = 'none');
    const flower = document.querySelector('.flower');
    flower.style.display = 'none';
  }, 500);
});
