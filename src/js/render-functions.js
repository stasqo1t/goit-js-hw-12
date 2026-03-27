import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li>
              <span>Likes</span>
              <span>${likes}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${views}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${comments}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${downloads}</span>
            </li>
          </ul>
        </li>`;
      }
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.textContent = 'Loading images, please wait...';
  loaderEl.classList.add('visible');
}

export function hideLoader() {
  loaderEl.classList.remove('visible');
  loaderEl.textContent = '';
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
