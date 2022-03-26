import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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
console.log(galleryList);

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250ms',
     });
console.log(lightbox);

