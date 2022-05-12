import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItems (galleryItems){
return galleryItems.map(el => {
    return `<li><a class="gallery__item"
     href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        alt="${el.description}"
      />
    </a></li>`
}).join('');}

galleryList.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250ms',
     });
console.log(lightbox);

