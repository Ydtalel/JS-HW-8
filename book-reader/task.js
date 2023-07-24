const sizesQuery = document.querySelectorAll('.font-size');
const bookControlColor = document.querySelector('.book__control_color');
const colorsQuery = bookControlColor.querySelectorAll('.color');
const bookControlBackground = document.querySelector('.book__control_background');
const bgColorsQuery = bookControlBackground.querySelectorAll('.color');
const book = document.getElementById('book');

const bookSettings = {
  fontSize: null,
  textColor: null,
  bgColor: null,
};

sizesQuery.forEach((size) => {
  size.addEventListener('click', (event) => {
    event.preventDefault();
    sizesQuery.forEach((size) => {
      size.classList.remove('font-size_active');
    });

    event.target.classList.add('font-size_active');
    const fontSize = event.target.getAttribute('data-size');
    bookSettings.fontSize = fontSize;

    applySettings(book, bookSettings);
  });
});

colorsQuery.forEach((color) => {
  color.addEventListener('click', (event) => {
    event.preventDefault();
    colorsQuery.forEach((color) => {
      color.classList.remove('color_active');
    });

    event.target.classList.add('color_active');
    const textColor = event.target.getAttribute('data-text-color');
    bookSettings.textColor = textColor;

    applySettings(book, bookSettings);
  });
});

bgColorsQuery.forEach((bgColor) => {
  bgColor.addEventListener('click', (event) => {
    event.preventDefault();
    bgColorsQuery.forEach((bgColor) => {
      bgColor.classList.remove('color_active');
    });

    event.target.classList.add('color_active');
    const bgColor = event.target.getAttribute('data-bg-color');
    bookSettings.bgColor = bgColor;

    applySettings(book, bookSettings);
  });
});

function applySettings(bookElement, settings) {
  bookElement.className = 'book';
  if (settings.fontSize) {
    bookElement.classList.add(`book_fs-${settings.fontSize}`);
  }
  if (settings.textColor) {
    bookElement.classList.add(`book_color-${settings.textColor}`);
  }
  if (settings.bgColor) {
    bookElement.classList.add(`book_bg-${settings.bgColor}`);
  }
}
