(function () {
  'use strict';

  const icons = document.querySelectorAll('.icon');

  window.addEventListener('resize', function () {
    if (window.innerWidth < 576) {
      setTimeout(() => {
        changeClass('fa-2x', 'fa-lg');
      }, 500);
    }

    if (window.innerWidth > 576) {
      setTimeout(() => {
        changeClass('fa-lg', 'fa-2x');
      }, 500);
    }
  });

  if (window.innerWidth < 576) {
    changeClass();
  }

  function changeClass(class1, class2) {
    icons.forEach((icon) => {
      icon.classList.remove(class1);
      icon.classList.add(class2);
    });
  }
})();
