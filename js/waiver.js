document.addEventListener('DOMContentLoaded', () => {
  // Problem 1
  const figures = document.querySelectorAll('figure');
  figures.forEach(figure => figure.classList.add('one-third'));

  // Problem 2
  const footer = document.querySelector('footer');
  if (footer) {
    footer.addEventListener('click', () => {
      footer.style.display = 'none'; 
    });
  }

  // Problem 3
  const fifthFigure = document.querySelectorAll('figure')[4];
  if (fifthFigure) {
    fifthFigure.addEventListener('dblclick', () => {
      fifthFigure.style.visibility = 'hidden'; 
    });
  }

  // Problem 4
  const firstCaption = document.querySelector('figcaption');
  if (firstCaption) {
    let originalFont = window.getComputedStyle(firstCaption).fontFamily;
    firstCaption.addEventListener('mouseover', () => {
      firstCaption.style.fontFamily = 'Cursive';
    });
    firstCaption.addEventListener('mouseout', () => {
      firstCaption.style.fontFamily = originalFont;
    });
  }

  // Problem 5
  if (firstCaption) {
    firstCaption.setAttribute('tabindex', '0'); 
    firstCaption.addEventListener('focus', () => {
      firstCaption.style.fontFamily = 'Cursive';
    });
    firstCaption.addEventListener('blur', () => {
      firstCaption.style.fontFamily = 'Times';
    });
  }
});
