const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryContainer = document.querySelector('.gallery');
const galleryItems = images.map(({ preview, original, description }) => {
  return `
  <li class="gallery-item">
  <a class="gallery-link" href="${original}">
  <img src="${preview}" class="gallery-image" data-source="${original}" alt="${description}" />
  </a>
  </li>
  `
    ;
}).join('')

galleryContainer.insertAdjacentHTML('afterbegin', galleryItems);

galleryContainer.addEventListener('click', handlerGalleryClick);
function handlerGalleryClick(event) {
  event.preventDefault();
  const isGalleryItem = event.target.classList.contains("gallery-image");
  if (!isGalleryItem) {
    return;
  }
  const originalSrc = event.target.dataset.source;
  openModal(originalSrc);
}
function openModal(src) {
  const instance = basicLightbox.create(`<img src="${src}" width="1112" height="640">`);
  instance.show();
}































// const galleryContainer = document.querySelector('.gallery')

// function createGalleryItems(images) {
//       return images.map(({ preview, original, description }) => {
//         return `
//           <li class="gallery-item">
//             <a class="gallery-link" href="${original}">
//               <img
//                 class="gallery-image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//               />
//             </a>
//           </li>
//         `;
//       }).join('');
//     }

//     const galleryMarkup = createGalleryItems(images);
//     galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

// galleryContainer.addEventListener('click', hadlerGaleryClick);
// function hadlerGaleryClick(event) {
//   event.preventDefault();
//   const isGalleryItem = event.target.classList.contains('gallery-image');
//   if (!isGalleryItem) {
//     return;
//   }
//   const originalSrc = event.target.dataset.source;
//   openModal(originalSrc);
// }
// function openModal(src) {
//   const instance = basicLightbox.create(`<img src = "${src}" width="1112" height="640">`);
//     instance.show();
// }

const style = document.createElement('style');
        style.textContent = `
            .gallery {
                display: flex;
                flex-wrap: wrap;
                gap: 24px;
                list-style: none;
                padding: 0;
                margin: 24px 156px;
            }
            .gallery-item {
                width: calc((100% - 48px) / 3);
            }
            .gallery img {
                width: 100%;
                height: auto;
                display: block;
            }
        `;
document.head.appendChild(style);











