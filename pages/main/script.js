const listOfPets = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: `Jennifer is a sweet 2 months old Labrador that is patiently
                  waiting to find a new forever home. This girl really enjoys being able
                  to go outside to run and play, but won't hesitate to play up a storm
                  in the house if she has all of her favorite toys.`,
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: `Sophia here and I'm looking for my forever home to live out the best
                  years of my life. I am full of energy. Everyday I'm learning new things,
                  like how to walk on a leash, go potty outside, bark and play with toys
                  and I still need some practice.`,
    age: "1 month",
    inoculation: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: `Woody is a handsome 3 1/2 year old boy. Woody does know basic
                  commands and is a smart pup. Since he is on the stronger side, he will learn
                  a lot from your training. Woody will be happier when he finds a new family 
                  that can spend a lot of time with him.`,
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: `Scarlett is a happy, playful girl who will make you laugh and smile.
                  She forms a bond quickly and will make a loyal companion and a wonderful family dog
                  or a good companion for a single individual too since she likes to hang out and be
                  with her human.`,
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: `Katrine is a beautiful girl. She is as soft as the finest velvet with
                  a thick lush fur. Will love you until the last breath she takes as long as you are
                  the one. She is picky about her affection. She loves cuddles and to stretch into
                  your hands for a deeper relaxations.`,
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: `Timmy is an adorable grey british shorthair male. He loves to play and
                  snuggle. He is neutered and up to date on age appropriate vaccinations. He can be
                  chatty and enjoys being held. Timmy has a lot to say and wants a person to share
                  his thoughts with.`,
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: `Freddie is a little shy at first, but very sweet when he warms up.
                  He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms
                  of his human’s daily life. Freddie has bounced around a lot in his life, and is
                  looking to find his forever home.`,
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: `This cute boy, Charly, is three years old and he likes adults and kids.
                  He isn’t fond of many other dogs, so he might do best in a single dog home. Charly
                  has lots of energy, and loves to run and play. We think a fenced yard would make
                  him very happy.`,
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

function createPopup() {
  const positionWindow = window.pageYOffset;
  const wrapper = document.querySelector(".wrapper__our-friends");
  const popupContainer = document.createElement("section");
  popupContainer.classList.add("popup__container");
  popupContainer.style.top = `${positionWindow}px`;
  wrapper.append(popupContainer);
  const popupCard = document.createElement("div");
  popupCard.classList.add("popup-card");
  popupContainer.append(popupCard);
  const buttonClosePopup = document.createElement("button");
  buttonClosePopup.classList.add("button-close-popup");
  popupCard.append(buttonClosePopup);
  const popupPosition = document.createElement("div");
  popupPosition.classList.add("popup-position");
  buttonClosePopup.after(popupPosition);
  const imgPet = document.createElement("img");
  imgPet.classList.add("image__pet");
  popupPosition.append(imgPet);
  const imgInformation = document.createElement("div");
  imgInformation.classList.add("pet__information");
  imgPet.after(imgInformation);
  const petName = document.createElement("h2");
  petName.classList.add("pet__name");
  imgInformation.append(petName);
  const petSort = document.createElement("p");
  petSort.classList.add("pet__sort");
  petName.after(petSort);
  const petDescription = document.createElement("p");
  petDescription.classList.add("pet__description");
  petSort.after(petDescription);
  const petListHealthy = document.createElement("ul");
  petListHealthy.classList.add("pet__list-of-healthy");
  petDescription.after(petListHealthy);
  const petAge = document.createElement("li");
  petAge.classList.add("pet__age");
  petListHealthy.append(petAge);
  const petInoculation = document.createElement("li");
  petInoculation.classList.add("pet__inoculation");
  petAge.after(petInoculation);
  const petDiseases = document.createElement("li");
  petDiseases.classList.add("pet__diseases");
  petInoculation.after(petDiseases);
  const petParasites = document.createElement("li");
  petParasites.classList.add("pet__parasites");
  petDiseases.after(petParasites);
  const bodyMain = document.body;
  bodyMain.classList.add("body");
}

function addInformainoInsidePopup(namePet) {
  let pet;
  for (let i = 0; i < listOfPets.length; i++) {
    const item = listOfPets[i];
    if (item.name === namePet) {
      pet = item;
    }
  }
  const imgPet = document.querySelector(".image__pet");
  imgPet.setAttribute("src", pet.img);
  imgPet.setAttribute("alt", pet.name);
  const petName = document.querySelector(".pet__name");
  petName.textContent = pet.name;
  const petSort = document.querySelector(".pet__sort");
  petSort.textContent = pet.type;
  const petDescription = document.querySelector(".pet__description");
  petDescription.textContent = pet.description;
  const petAge = document.querySelector(".pet__age");
  petAge.textContent = `Age: ${pet.age}`;
  const petInoculation = document.querySelector(".pet__inoculation");
  petInoculation.textContent = `Inoculations: ${pet.inoculations.join(" ")}`;
  const petDiseases = document.querySelector(".pet__diseases");
  petDiseases.textContent = `Diseases: ${pet.diseases.join(" ")}`;
  const petParasites = document.querySelector(".pet__parasites");
  petParasites.textContent = `Parasites: ${pet.parasites.join(" ")}`;
}

const petsCardArray = [
  { id: "Katrine", visible: true },
  { id: "Jennifer", visible: true },
  { id: "Woody", visible: true },
  { id: "Sophia", visible: false },
  { id: "Timmy", visible: false },
  { id: "Charly", visible: false },
  { id: "Scarlett", visible: false },
  { id: "Freddie", visible: false },
];

const bodyMain = document.body;
bodyMain.addEventListener('mouseover', (event) => {
  const target = event.target;
  const targetPopup = target.closest(".popup-position");
  const popupContainer = document.querySelector('.popup__container');
  if (popupContainer) {
    if(!targetPopup) {
      popupContainer.classList.add('popup-container-hover');
    } else {
      popupContainer.classList.remove('popup-container-hover');
    }
  } else {
    return;
  }
})

const sliderButtonClick = document.querySelector(".wrapper__our-friends");
sliderButtonClick.addEventListener("click", swapCard);
function swapCard(event) {
  const target = event.target;
  const targetPopup = target.closest(".popup-position");
  const popupBox = document.querySelector(".popup__container");
  const contentSize = document.documentElement.clientWidth;
  const sliderButton = target.classList.contains("slider-button");
  const arraywithUnvisibleCards = [];
  const arraywitRandomCards = [];
  const cardOfPet = target.closest("figure");
  for (let i = 0; i < petsCardArray.length; i++) {
    const item = petsCardArray[i];
    if (!item.visible) {
      arraywithUnvisibleCards.push(item);
    }
  }
  if (popupBox) {
    if (!targetPopup) {
      popupBox.remove();
      const bodyMain = document.body;
      bodyMain.classList.remove("body");
    }
  } else if (!popupBox) {
    if (cardOfPet) {
      const cardOfPetId = cardOfPet.getAttribute("id");
      createPopup();
      addInformainoInsidePopup(cardOfPetId);
    }
    if (sliderButton) {
      for (let i = 0; i < 3; i++) {
        const item =
          arraywithUnvisibleCards[
            Math.floor(Math.random() * arraywithUnvisibleCards.length)
          ];
        if (arraywitRandomCards.includes(item.id)) {
          i--;
          continue;
        }
        arraywitRandomCards.push(item.id);
      }
      if (contentSize < 1280) {
        arraywitRandomCards.pop();
      }

      if (768 > contentSize) {
        arraywitRandomCards.pop();
      }
      for (let i = 0; i < petsCardArray.length; i++) {
        const item = petsCardArray[i];
        const cardtId = document.getElementById(item.id);
        if (arraywitRandomCards.includes(item.id)) {
          const woody = document.getElementById("Woody");
          woody.classList.remove("figure__our-friends-card-3");
          const jennifer = document.getElementById("Jennifer");
          jennifer.classList.remove("figure__our-friends-card-2");
          item.visible = true;
        } else {
          item.visible = false;
        }
        if (item.visible) {
          const leftButtonSlider = document.querySelector('.slider-button-left');
          const rightButtonSlider = document.querySelector('.slider-button-right');
          const leftButtonSliderMobile = document.querySelector('.slider-button-left-mobile');
          const rightButtonSliderMobile = document.querySelector('.slider-button-right-mobile');
          cardtId.classList.remove("card-none");
          if(leftButtonSlider === target || leftButtonSliderMobile === target) {
            cardtId.classList.add('animate-left');
          } else if (rightButtonSlider === target || rightButtonSliderMobile === target) {
            cardtId.classList.add('animate-right');
          }
        } else {
          cardtId.classList.add("card-none");
        }
      }
    }
  }
}

const headerNavigation = document.querySelector(".header__navigation");
headerNavigation.addEventListener("mouseover", clickLink);
function clickLink(event) {
  const linkArray = [
    { id: "link-about", active: true },
    { id: "link-our", active: false },
    { id: "link-help", active: false },
    { id: "link-contact", active: false },
  ];
  const target = event.target;
  const targetClassName = target.classList.contains("header__link");
  const targetId = target.getAttribute("id");
  if (targetClassName) {
    linkArray.forEach((item) => {
      const itemId = document.getElementById(item.id);
      if (item.id === targetId) {
        item.active = true;
      } else {
        item.active = false;
      }
      if (item.active === true) {
        target.classList.add("link__underline");
      } else if (item.active === false) {
        if (itemId.classList.contains("link__underline")) {
          itemId.classList.remove("link__underline");
        }
      }
    });
  }
}

const burger = document.querySelector(".header__box");
bodyMain.addEventListener("click", changeBurger);
function changeBurger(event) {
  const target = event.target;
  const label = document.getElementById("label");
  const labelSpan = target.closest('.burger-menu');
  const contact = document.getElementById('link-contact');
  const about = document.getElementById('link-about');
  const help = document.getElementById('link-help');
  const cozyHouse = document.querySelector('.wrapper__cozy-house');
  const labelBurgerClose = label.classList.contains("menu__label-close");
  const labelBurgerOpen = label.classList.contains("menu__label-open");
  const headerNavigetionID = document.getElementById("navigation");
  const headerNavigetionClass = document.querySelector('.header__navigation-burger');
  const wrapperHeader = document.querySelector('.wrapper__header');
  const bodyMain = document.body;

  if (headerNavigetionClass) {
    const burgerMenu = target.closest('.header__navigation-burger');
    const pageTitle = target.closest('.header__logo');
    const burgerButton = target.closest('.menu__button-input');
    if(!burgerMenu && !pageTitle && !burgerButton) {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove("header__navigation-burger-slideout");
      },900)
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      wrapperHeader.classList.remove('section__box-color');
      cozyHouse.classList.remove('section__box-color');
    }
  }
  if(target === contact) {
    window.scrollBy(0,4070);
    headerNavigetionID.style.top = '4070px';
    setTimeout(() => {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove("header__navigation-burger-slideout");
        headerNavigetionID.style.top = '0px';
      },900)
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      wrapperHeader.classList.remove('section__box-color');
      cozyHouse.classList.remove('section__box-color');
    },900)
  }
  if (target === about) {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove("header__navigation-burger-slideout");
      },900)
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      wrapperHeader.classList.remove('section__box-color');
      cozyHouse.classList.remove('section__box-color');
  }
  if(target === help) {
    window.scrollBy(0,2750);
    headerNavigetionID.style.top = '2750px';
    setTimeout(() => {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove("header__navigation-burger-slideout");
        headerNavigetionID.style.top = '0px';
      },900)
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      wrapperHeader.classList.remove('section__box-color');
      cozyHouse.classList.remove('section__box-color');
    },900)
  }
  if (target === label || labelSpan) {
    if (labelBurgerClose) {
      if(document.documentElement.clientHeight < 814) {

      }
      headerNavigetionID.classList.add("header__navigation-burger");
      headerNavigetionID.classList.remove("header__navigation");
      label.classList.add("menu__label-open");
      label.classList.remove("menu__label-close");
      bodyMain.classList.add("body");
      wrapperHeader.classList.add('section__box-color');
      cozyHouse.classList.add('section__box-color');
    } else if (labelBurgerOpen) {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove("header__navigation-burger-slideout");
      },900)
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      wrapperHeader.classList.remove('section__box-color');
      cozyHouse.classList.remove('section__box-color');
    }
  } 
}
