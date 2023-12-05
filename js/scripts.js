const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
let gap = 0;

const sliderElements = document.querySelectorAll('.slider__element');

const rootStyles = document.documentElement.style;

let slideCounter = 0;
let isInTransition = false;

const DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};

const getTransformValue = () =>
  Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

const reorderSlide = () => {

 
  const transformValue = getTransformValue() ;
  rootStyles.setProperty('--transition', 'none');
  if (slideCounter === sliderElements.length - 3) {
    
    slider.appendChild(slider.firstElementChild);
    
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth + gap}px`
    );
    slideCounter--;
    // gap = -10
  } else if (slideCounter === 0) {
    slider.prepend(slider.lastElementChild);
    
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter+1].scrollWidth -gap }px`
    );
     slideCounter++;
    //  gap=0;
    
  }

  isInTransition = false;
};

const moveSlide = direction => {
  
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'transform 1s');
  isInTransition = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth }px`
    );
     slideCounter--;
     console.log("🚀 ~ file: scripts.js:63 ~ moveSlide ~ slideCounter:", slideCounter)
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
      
    slideCounter++;
  }
};

buttonRight.addEventListener('click', () => moveSlide(DIRECTION.RIGHT));
buttonLeft.addEventListener('click', () => moveSlide(DIRECTION.LEFT));

slider.addEventListener('transitionend', reorderSlide);

 reorderSlide();



 const sliderContainer2 = document.getElementById('slider-container2');
const slider2 = document.getElementById('slider2');
const buttonLeft2 = document.getElementById('button-left2');
const buttonRight2 = document.getElementById('button-right2');
let gap2 = 0;

const sliderElements2 = document.querySelectorAll('.slider__element2');

const rootStyles2 = document.documentElement.style;

let slideCounter2 = 0;
let isInTransition2 = false;

const DIRECTION2 = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};

const getTransformValue2 = () =>
  Number(rootStyles.getPropertyValue('--slide-transform2').replace('px', ''));

const reorderSlide2 = () => {

 
  const transformValue = getTransformValue2() ;
  console.log("🚀 ~ file: scripts.js:109 ~ reorderSlide2 ~ transformValue:", transformValue)
  rootStyles.setProperty('--transition', 'none');
  if (slideCounter2 === sliderElements2.length - 3) {
    
    slider2.appendChild(slider2.firstElementChild);
    
    rootStyles.setProperty(
      '--slide-transform2',
      `${transformValue + sliderElements2[slideCounter2].scrollWidth + gap2}px`
    );
    slideCounter2--;
    // gap = -10
  } else if (slideCounter2 === 0) {
    slider2.prepend(slider2.lastElementChild);
    
    rootStyles.setProperty(
      '--slide-transform2',
      `${transformValue - sliderElements2[slideCounter2+1].scrollWidth -gap }px`
    );
     slideCounter2++;
    //  gap=0;
    
  }

  isInTransition2 = false;
};

const moveSlide2 = direction => {
  console.log("🚀 ~ file: scripts.js:136 ~ moveSlide2 ~ direction:", direction)
  
  if (isInTransition2) return;
  const transformValue = getTransformValue2();
  rootStyles.setProperty('--transition', 'transform 1s');
  isInTransition2 = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      '--slide-transform2',
      `${transformValue + sliderElements2[slideCounter2].scrollWidth }px`
    );
     slideCounter2--;
     console.log("🚀 ~ file: scripts.js:63 ~ moveSlide ~ slideCounter2:", slideCounter2)
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      '--slide-transform2',
      `${transformValue - sliderElements2[slideCounter2].scrollWidth}px`
    );
      
    slideCounter2++;
  }
};

buttonRight2.addEventListener('click', () => moveSlide2(DIRECTION.RIGHT));
buttonLeft2.addEventListener('click', () => moveSlide2(DIRECTION.LEFT));

slider2.addEventListener('transitionend', reorderSlide2);

 reorderSlide2();

 window.addEventListener('resize', start);

 function start(){
  // rootStyles.setProperty(
  //   '--slide-transform2',
  //   `${0}px`
  // );
 rootStyles.setProperty(
    '--slide-transform2',
    `${0}px`
  );
  const transformValue = getTransformValue2() ;

  slider2.prepend(slider2.lastElementChild);
    
    rootStyles.setProperty(
      '--slide-transform2',
      `${transformValue - sliderElements2[slideCounter2+1].scrollWidth -gap }px`
    );

     rootStyles.setProperty(
    '--slide-transform',
    `${0}px`
  );
  const transformValue1 = getTransformValue() ;

  slider.prepend(slider.lastElementChild);
    
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue1 - sliderElements[slideCounter+1].scrollWidth -gap }px`
    );
 
  // console.log("redimension")
  // reorderSlide2(); reorderSlide();
}

async function renderCards() {
  // Ruta del archivo JSON
 

  try {
     
      const data = [
        {
          "imgSrc": "./assets/Developments/d1.png",
          "title": "The Surf Row",
          "description": "Surfside"
        },
        {
          "imgSrc": "./assets/Developments/d2.png",
          "title": "Indigo",
          "description": "Vero Beach"
        },
       
        {
          "imgSrc": "./assets/Developments/d3.png",
          "title": "Rosewood - Baha Mar",
          "description": "Nassau, the Bahamas"
        },
        {
          "imgSrc": "./assets/Developments/d4.png",
          "title": "St. Regis - The Astor Tower",
          "description": "Brickell, Miami"
        },
        {
          "imgSrc": "./assets/Developments/d5.png",
          "title": "Giralda Place",
          "description": "Coral Gables"
        },
        {
          "imgSrc": "./assets/Developments/d6.png",
          "title": "St. Regis - The William Tower",
          "description": "Brickell, Miami"
        },
        {
          "imgSrc": "./assets/Developments/d7.png",
          "title": "Solterre at Cockleshell Bay",
          "description": "St. Kitts and nevis"
        },
        {
          "imgSrc": "./assets/Developments/d8.png",
          "title": "Urbin",
          "description": "Coconut Grove"
        },
      ]

      // Obtener el contenedor de tarjetas
      const cardContainer = document.getElementById('cardContainer');

      // Recorrer los datos y crear tarjetas dinámicamente
      data.forEach(cardData => {
          const card = document.createElement('div');
          card.className = 'card';

          const img = document.createElement('img');
          img.src = cardData.imgSrc;
          // img.className = "img-card"
          img.alt = 'Imagen de ejemplo';

          const cardContent = document.createElement('div');
          cardContent.className = 'card-content';

          const title = document.createElement('h2');
          title.className = 'card-title';
          title.textContent = cardData.title;

          const description = document.createElement('p');
          description.className = 'card-description';
          description.textContent = cardData.description;

          // Agregar elementos al DOM
          cardContent.appendChild(title);
          cardContent.appendChild(description);

          card.appendChild(img);
          card.appendChild(cardContent);

          cardContainer.appendChild(card);
      });
  } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
  }
}

// Llamar a la función para renderizar las tarjetas al cargar la página
renderCards();


// script.js
document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.animated-element');
  let isScrollingUp = false;

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (isScrollingUp) {
          // Quita la clase 'animate' solo cuando el usuario hace scroll hacia arriba y el elemento está en la vista
          entry.target.classList.remove('animate');
        }
        entry.target.classList.add('animate');
      } else {
        // Elemento fuera de la vista
        if (isScrollingUp) {
          // Quita la clase 'animate' solo cuando el usuario hace scroll hacia arriba y el elemento sale del foco
          entry.target.classList.remove('animate');
        }
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

  animatedElements.forEach(element => {
    observer.observe(element);
  });

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determina la dirección del scroll comparando la posición actual con la anterior
    isScrollingUp = scrollTop < (window.lastScrollTop || 0);
    window.lastScrollTop = scrollTop;

    if (scrollTop === 0) {
      animatedElements.forEach(element => {
        element.classList.remove('animate');
      });
    }
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
