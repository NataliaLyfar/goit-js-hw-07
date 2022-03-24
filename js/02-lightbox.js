import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

function createGalleryItems (galleryItems){
return galleryItems.map(el => {
    return `<a class="gallery__item"
     href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        alt="${el.description}"
      />
    </a>`
}).join('');}

galleryList.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
console.log(galleryList);

galleryList.addEventListener('click', onImageClick);
function onImageClick(e) {
    e.preventDefault(); 
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    console.log(e.target);

   var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250ms',
     });
   
   return lightbox;
}

