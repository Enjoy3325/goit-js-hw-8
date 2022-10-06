// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');

console.log(galleryItems);

const renderImage = galleryItems.map(({ preview, original, description }) => {
  const photo = `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" title="${description}"
    />
  </a>
</li>`;

  console.log(photo);
  return photo;
});
ulGallery.innerHTML = renderImage.join('');

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
