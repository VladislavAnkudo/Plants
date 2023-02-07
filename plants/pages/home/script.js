//prices
class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: false
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

const accHeader = document.querySelectorAll(".accordion__header");

accHeader.forEach((el) => {
  //console.log(el)
  el.addEventListener("click", (event) =>{
    el.classList.toggle("active");
    const activeEl = event.currentTarget;
    if(!activeEl.classList.contains('active')) activeEl.classList.remove('active')
    else {
      const activeItem = document.querySelectorAll(".active")
      activeItem.forEach((elem) =>{
        elem.classList.remove('active')
      })
      activeEl.classList.add('active')
    }
  }) 
})
//prices

//service
const btnGarden = document.querySelector(".btn__garden");
const btnLawn = document.querySelector(".btn__lawn");
const btnPlan = document.querySelector(".btn__planting");
const servicePlant = document.querySelectorAll(".service__plant");
const gardenesa = document.querySelectorAll(".gardenes");

(function (){
  gardenesa.forEach((el, index) =>{
    el.addEventListener("click", () =>{
     if(index === 0) btnGarden.classList.toggle('active__color');
     if(index === 1) btnLawn.classList.toggle('active__color');
     if(index === 2) btnPlan.classList.toggle('active__color');
  
    if(gardenesa[0].classList.contains('active__color')){
      gardenesa[1].disabled = true
      gardenesa[1].classList.add('noactive__btn')
      gardenesa[2].disabled = true
      gardenesa[2].classList.add('noactive__btn')
    }
    else if(gardenesa[1].classList.contains('active__color')){
      gardenesa[0].disabled = true
      gardenesa[0].classList.add('noactive__btn')
      gardenesa[2].disabled = true
      gardenesa[2].classList.add('noactive__btn')
    }
    else if(gardenesa[2].classList.contains('active__color')){
      gardenesa[0].disabled = true
      gardenesa[0].classList.add('noactive__btn')
      gardenesa[1].disabled = true
      gardenesa[1].classList.add('noactive__btn')
    }
    else {
      gardenesa[0].disabled = false;
      gardenesa[1].disabled = false;
      gardenesa[2].disabled = false;
      gardenesa[0].classList.remove('noactive__btn');
      gardenesa[1].classList.remove('noactive__btn');
      gardenesa[2].classList.remove('noactive__btn');
    }
    })
  })
}());

(function (){
  servicePlant.forEach((elem, ind) =>{
    if(ind === 1 || ind === 2 || ind === 3 || ind === 5){
      btnGarden.addEventListener("click", () =>{
        elem.classList.toggle('service__blur');
      })
    }
    if(ind === 0 || ind === 1 || ind === 3 || ind === 4 || ind === 5){
      btnLawn.addEventListener("click", () =>{
        elem.classList.toggle('service__blur');
      })
    }
    if(ind === 0 || ind === 2 || ind === 4){
      btnPlan.addEventListener("click", () =>{
        elem.classList.toggle('service__blur');
      })
    }
  })
}());
//service

//burger
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
//burger

//select
const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const contactInfo = document.querySelector('.contact__information');
const Contacts = [
  {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    adress: '511 Warburton Ave',
  },
  {
    city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    adress: '151 Charlotte Street',
  },
  {
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    adress: '14 WEST Noyes BLVD',
  },
  {
    city: 'New York City',
    phone: '+1 212 456 0002',
    adress: '9 East 91st Street',
  }
];

dropdownBtn.addEventListener('click', () =>{
  dropdownList.classList.toggle('dropdown__list-active');
  dropdownBtn.classList.add('dropdown__btn-active');
})

dropdownItem.forEach((item) => {
  item.addEventListener('click', () =>{
    dropdownBtn.innerText = item.innerText;
    dropdownList.classList.remove('dropdown__list-active');
  })
})

dropdownItem.forEach((item) => {
  item.addEventListener('click', () =>{
    const cityInfo = document.querySelector('#city');
    const phoneInfo = document.querySelector('#phone');
    const adressInfo = document.querySelector('#adress');
    contactInfo.classList.add('contact__information-active');

    const itemContact = item.innerText;
    const objectContacts = Contacts.find(item => item.city === itemContact)
    cityInfo.innerText = objectContacts[city.attributes.id.value];
    phoneInfo.innerText = objectContacts[phone.attributes.id.value];
    adressInfo.innerText = objectContacts[adress.attributes.id.value];

    const contactCall = document.querySelector('.numb_call');
    contactCall.href = `tel:${objectContacts.phone.split(" ").join("")}`;
  })
})

//select