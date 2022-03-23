import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
let instance = null;

const galleryItem = galleryItems.map(el => {
    return `<div class="gallery__item">
    <a class="gallery__link"
     href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`
}).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
console.log(galleryContainer);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault(); 
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    console.log(e.target);
   
    instance = basicLightbox.create(`<img
    class="gallery__image"
    src = "${e.target.dataset.source}"
  />`,
   {
    onShow: () => {
       window.addEventListener('keydown', onEscPress);
    },
    onClose: () => {
        window.removeEventListener('keydown', onEscPress);
     },
});
instance.show();
}

function onEscPress(e){
if(e.code === 'Escape'){instance.close();}
};