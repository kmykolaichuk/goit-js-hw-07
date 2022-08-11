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

galleryContainer.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const selectedCard = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${selectedCard}" width="800" height="600">
`);

  instance.show();

  galleryContainer.addEventListener('keyup', evt => {
    if (evt.key === 'Escape') {
      instance.close();
    }

    console.log(evt.key);
  });
});
