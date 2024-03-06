/*
   Changed at 03.03.2024
*/

/* swiper */

const swiper = new Swiper('.swiper', {
    loop: true,

    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

const swiperSlider = new Swiper('.swiperSlider', {
  loop: true,
  autoplay: {     
    delay: 2500,
  },
  speed: 2500
})

/* slider */

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  for (const slide of slides) {
    slide.classList.remove("active");
  }
}

[...document.querySelectorAll("h5")].forEach((h5) => {
  h5.innerHTML = h5.textContent
    .split("")
    .map((l) => `<span>${l}</span>`)
    .join("");
});

/* burger menu */

const burger = document.querySelector('.burger');
const menu = document.querySelector('.hat_ul');

burger.addEventListener('click', function(event) {
  menu.classList.toggle('active');
});

const closeMenu = function(event) {
  const dropdownMenu = document.querySelector('.solutions_menu')
  if (event.target !== dropdownMenu && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('active');
    document.removeEventListener('click', closeMenu, true)
  }
}

document.addEventListener('click', closeMenu, true)



/*  map  */


ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [54.903661, 52.308097],
    zoom: 16,
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
//   myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.controls.remove('default');

  var myPlacemark = new ymaps.Placemark([54.903661, 52.308097], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon.png',
    iconImageSize: [40, 40],
  });

  myMap.geoObjects.add(myPlacemark);
}















