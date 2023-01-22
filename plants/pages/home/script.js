class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
          }
        }
        elHeader.parentElement.classList.toggle('accordion__item_show');
      });
    }
  }

  new ItcAccordion('#accordion-1');


  let header1 = document.querySelector(".header1");
  let header2 = document.querySelector(".header2");
  let header3 = document.querySelector(".header3");
  header1.addEventListener("click", function() {
    this.classList.toggle("active");
  });
  header2.addEventListener("click", function() {
    this.classList.toggle("active");
  });
  header3.addEventListener("click", function() {
    this.classList.toggle("active");
  });


(function (){
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuclose = document.querySelector('.header__nav-close');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });
  menuclose.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
}());