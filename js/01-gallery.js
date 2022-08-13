import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryCardEl = ({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const addCardGalleryEl = galleryItems.map(createGalleryCardEl).join('');

galleryContainer.insertAdjacentHTML('beforeend', addCardGalleryEl);

galleryContainer.addEventListener('click', onCardClick);

const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscPress);
  },

  onClose: instance => {
    window.removeEventListener('keydown', onEscPress);
  },
});

function onCardClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;
  instance.show();
}

function onEscPress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    return;
  }
}
