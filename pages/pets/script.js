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
    inoculations: ["parvovirus"],
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
const petsCardArray = [
  "Katrine",
  "Jennifer",
  "Woody",
  "Sophia",
  "Timmy",
  "Charly",
  "Scarlett",
  "Freddie",
];

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

// const burger = document.querySelector(".header__box");
// burger.addEventListener("click", changeBurger);
// function changeBurger(event) {
//   const target = event.target;
//   const burgerClose = target.classList.contains("menu__label-close");
//   const burgerOpen = target.classList.contains("menu__label-open");
//   const headerNavigetion = document.getElementById("navigation");
//   if (burgerClose) {
//     headerNavigetion.classList.add("header__navigation-burger");
//     headerNavigetion.classList.remove("header__navigation");
//     target.classList.add("menu__label-open");
//     target.classList.remove("menu__label-close");
//   }

//   if (burgerOpen) {
//     headerNavigetion.classList.remove("header__navigation-burger");
//     headerNavigetion.classList.add("header__navigation");
//     target.classList.add("menu__label-close");
//     target.classList.remove("menu__label-open");
//   }
// }

function createArrayEightCards(petsCardArray) {
  const petsCards = [];
  for (let i = 0; i < 6; i++) {
    const arr = [];
    petsCards.push(arr);
    arr.length = 0;
    if (petsCards.length > 6) {
      break;
    }
    for (let j = 0; j < 8; j++) {
      const item = Math.floor(Math.random() * petsCardArray.length);
      if (arr.includes(petsCardArray[item])) {
        j--;
        continue;
      } else {
        arr.push(petsCardArray[item]);
      }
      if (arr.length > 8) {
        break;
      }
    }
  }
  return petsCards;
}

function createArraySixCards(petsCardArray) {
  const petsCards = [];
  for (let i = 0; i < 8; i++) {
    const arr = [];
    petsCards.push(arr);
    arr.length = 0;
    if (petsCards.length > 8) {
      break;
    }
    for (let j = 0; j < 6; j++) {
      const item = Math.floor(Math.random() * petsCardArray.length);
      if (arr.includes(petsCardArray[item])) {
        j--;
        continue;
      } else {
        arr.push(petsCardArray[item]);
      }
      if (arr.length > 6) {
        break;
      }
    }
  }
  return petsCards;
}

function createArrayThreeCards(petsCardArray) {
  const petsCards = [];
  for (let i = 0; i < 16; i++) {
    const arr = [];
    petsCards.push(arr);
    arr.length = 0;
    if (petsCards.length > 16) {
      break;
    }
    for (let j = 0; j < 3; j++) {
      const item = Math.floor(Math.random() * petsCardArray.length);
      if (arr.includes(petsCardArray[item])) {
        j--;
        continue;
      } else {
        arr.push(petsCardArray[item]);
      }
      if (arr.length > 3) {
        break;
      }
    }
  }
  return petsCards;
}

function createPaginationList(petName, src, index) {
  const listOfCards = document.querySelector(".figure__our-friends-cards");
  const figure = document.createElement("figure");
  figure.classList.add("figure__our-friends-card");
  figure.classList.add(`list-of-cards-${index}`);
  figure.setAttribute("id", petName);
  listOfCards.append(figure);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", petName);
  figure.append(img);
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = petName;
  img.after(figcaption);
  const button = document.createElement("button");
  button.textContent = "Learn more";
  figcaption.after(button);
}

function createBoxWithPets(index) {
  const contentSize = document.documentElement.clientWidth;
  if (contentSize >= 1280) {
    const array = createArrayEightCards(petsCardArray);
    for (let i = 0; i < array[index].length; i++) {
      const item = array[index];
      for (let j = 0; j < listOfPets.length; j++) {
        const petInfo = listOfPets[j];
        if (item[i] === petInfo.name) {
          createPaginationList(petInfo.name, petInfo.img, index);
        }
      }
    }
  }
  if (contentSize >= 768 && 1280 > contentSize) {
    const array = createArraySixCards(petsCardArray);
    for (let i = 0; i < array[index].length; i++) {
      const item = array[index];
      for (let j = 0; j < listOfPets.length; j++) {
        const petInfo = listOfPets[j];
        if (item[i] === petInfo.name) {
          createPaginationList(petInfo.name, petInfo.img, index);
        }
      }
    }
  }
  if (contentSize < 768) {
    const array = createArrayThreeCards(petsCardArray);
    for (let i = 0; i < array[index].length; i++) {
      const item = array[index];
      for (let j = 0; j < listOfPets.length; j++) {
        const petInfo = listOfPets[j];
        if (item[i] === petInfo.name) {
          createPaginationList(petInfo.name, petInfo.img, index);
        }
      }
    }
  }
}

function checkFirstPage() {
  const buttonPagination = document.querySelector(".slider-button-center");
  const sliderButtonPrevPage = document.querySelector(".slider-button-prev");
  const sliderButtonToFirstPage = document.querySelector(
    ".slider-button-to-first"
  );
  if (buttonPagination.textContent === "1") {
    sliderButtonPrevPage.setAttribute("disabled", "");
    sliderButtonToFirstPage.setAttribute("disabled", "");
  }
}

function disableLastPage() {
  const contentSize = document.documentElement.clientWidth;
  const buttonPagination = document.querySelector(".slider-button-center");
  const sliderButtonNextPage = document.querySelector(".slider-button-next");
  const sliderButtonToLastPage = document.querySelector(
    ".slider-button-doublenext"
  );
  let pageNumber = "";
  if (contentSize >= 1280) {
    pageNumber = "6";
  } else if (contentSize >= 768 && 1280 > contentSize) {
    pageNumber = "8";
  } else if (contentSize < 768) {
    pageNumber = "16";
  }
  if (buttonPagination.textContent === pageNumber) {
    sliderButtonNextPage.setAttribute("disabled", "");
    sliderButtonToLastPage.setAttribute("disabled", "");
  }
}

function undisableFirstPage() {
  const sliderButtonPrevPage = document.querySelector(".slider-button-prev");
  const sliderButtonToFirstPage = document.querySelector(
    ".slider-button-to-first"
  );
  sliderButtonPrevPage.removeAttribute("disabled", "");
  sliderButtonToFirstPage.removeAttribute("disabled", "");
}

function undisableLastPage() {
  const contentSize = document.documentElement.clientWidth;
  const buttonPagination = document.querySelector(".slider-button-center");
  const sliderButtonNextPage = document.querySelector(".slider-button-next");
  const sliderButtonToLastPage = document.querySelector(
    ".slider-button-doublenext"
  );
  let pageNumber = "";
  if (contentSize >= 1280) {
    pageNumber = "6";
  } else if (contentSize >= 768 && 1280 > contentSize) {
    pageNumber = "8";
  } else if (contentSize < 768) {
    pageNumber = "16";
  }
  if (buttonPagination.textContent !== pageNumber) {
    sliderButtonNextPage.removeAttribute("disabled", "");
    sliderButtonToLastPage.removeAttribute("disabled", "");
  }
}

function disableFirstPage() {
  const sliderButtonPrevPage = document.querySelector(".slider-button-prev");
  const sliderButtonToFirstPage = document.querySelector(
    ".slider-button-to-first"
  );
  sliderButtonPrevPage.setAttribute("disabled", "");
  sliderButtonToFirstPage.setAttribute("disabled", "");
}

function createPages() {
  const contentSize = document.documentElement.clientWidth;
  if (contentSize >= 1280) {
    const eightCards = createArrayEightCards(petsCardArray);
    for (let i = 0; i < eightCards.length; i++) {
      createBoxWithPets(i);
    }
  } else if (contentSize >= 768 && 1280 > contentSize) {
    const sixCards = createArraySixCards(petsCardArray);
    for (let i = 0; i < sixCards.length; i++) {
      createBoxWithPets(i);
    }
  } else if (contentSize < 768) {
    const threeCards = createArrayThreeCards(petsCardArray);
    for (let i = 0; i < threeCards.length; i++) {
      createBoxWithPets(i);
    }
  }
}
createPages();

function changePage() {
  const buttonPagination = document.querySelector(".slider-button-center");
  const buttonPaginationTextContent = Number(buttonPagination.textContent);
  const pageNumber = document.querySelectorAll(".figure__our-friends-card");
  for (let i = 0; i < pageNumber.length; i++) {
    const item = pageNumber[i].classList[1].split("-");
    const numberOfList = Number(item[item.length - 1]) + 1;
    numberOfList !== buttonPaginationTextContent
      ? pageNumber[i].classList.add("hide-card")
      : pageNumber[i].classList.remove("hide-card");
  }
}

function showOnlyStartPage() {
  const cards = document.querySelectorAll(".figure__our-friends-card");
  for (let i = 0; i < cards.length; i++) {
    const item = cards[i].classList[1].split("-");
    const lastItem = item[item.length - 1];
    if (lastItem !== "0") {
      cards[i].classList.add("hide-card");
    }
  }
}
showOnlyStartPage();

function changePagePagination(event) {
  const target = event.target;
  const buttonNextPage = target.classList.contains("slider-button-next");
  const buttonPrevPage = target.classList.contains("slider-button-prev");
  const buttonLastPage = target.classList.contains("slider-button-doublenext");
  const buttonFirstPage = target.classList.contains("slider-button-to-first");
  const buttonPagination = document.querySelector(".slider-button-center");
  const targetPopup = target.closest(".popup-position");
  const popupBox = document.querySelector(".popup__container");
  const cardOfPet = target.closest("figure");
  let pageNumber = buttonPagination.textContent;
  if (Number(pageNumber) !== 0) {
    undisableFirstPage();
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
  }
  if (buttonNextPage) {
    const newPage = Number(pageNumber) + 1;
    buttonPagination.textContent = newPage;
    changePage();
    disableLastPage();
  }
  if (buttonPrevPage) {
    const newPage = Number(pageNumber) - 1;
    buttonPagination.textContent = newPage;
    changePage();
    undisableLastPage();
    if(newPage === 1) {
      disableFirstPage();
    }
  }
  if (buttonLastPage) {
    const contentSize = document.documentElement.clientWidth;
    if (contentSize >= 1280) {
      buttonPagination.textContent = "6";
    } else if (contentSize >= 768 && 1280 > contentSize) {
      buttonPagination.textContent = "8";
    } else if (contentSize < 768) {
      buttonPagination.textContent = "16";
    }
    changePage();
    disableLastPage();
    undisableFirstPage();
  }
  if (buttonFirstPage) {
    buttonPagination.textContent = "1";
    changePage();
    disableFirstPage();
    undisableLastPage();
  }
}

const sectionOurFriends = document.querySelector(".section__our-friends-box");
sectionOurFriends.addEventListener("click", changePagePagination);

function createPopup() {
  const positionWindow = window.pageYOffset;
  const wrapper = document.querySelector(".wrapper__our-friends-cards");
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

const bodyMain = document.body;
bodyMain.addEventListener("mouseover", (event) => {
  const target = event.target;
  const targetPopup = target.closest(".popup-position");
  const popupContainer = document.querySelector(".popup__container");
  if (popupContainer) {
    if (!targetPopup) {
      popupContainer.classList.add("popup-container-hover");
    } else {
      popupContainer.classList.remove("popup-container-hover");
    }
  } else {
    return;
  }
});

const burger = document.querySelector(".header__box");
bodyMain.addEventListener("click", changeBurger);
function changeBurger(event) {
  const target = event.target;
  const label = document.getElementById("label");
  const labelSpan = target.closest(".burger-menu");
  const contact = document.getElementById("link-contact");
  const our = document.getElementById("link-our");
  const ourFriends = document.querySelector(".our-friends-aside-color-burger");
  const labelBurgerClose = label.classList.contains("menu__label-close");
  const labelBurgerOpen = label.classList.contains("menu__label-open");
  const headerNavigetionID = document.getElementById("navigation");
  const positionWindow = window.pageYOffset;
  const headerNavigetionClass = document.querySelector(
    ".header__navigation-burger"
  );
  const wrapperHeader = document.querySelector(".wrapper__header");
  const pageTitleText = document.querySelector(".header__logo-title");
  const pageTitleUnderLogoText = document.querySelector(".header__logo-text");
  const headerBoxSection = document.querySelector(".header__box");
  const bodyMain = document.body;

  if (headerNavigetionClass) {
    window.scrollTo(0, 0);
    const burgerMenu = target.closest(".header__navigation-burger");
    const pageTitle = target.closest(".header__logo");
    const burgerButton = target.closest(".menu__button-input");
    if (!burgerMenu && !pageTitle && !burgerButton) {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      headerNavigetionID.style.top = `${positionWindow}px`;
      setTimeout(() => {
        headerNavigetionID.classList.remove(
          "header__navigation-burger-slideout"
        );
      }, 900);
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      pageTitleText.style.color = "rgba(84, 84, 84, 1)";
      pageTitleUnderLogoText.style.color = "rgba(41, 41, 41, 1)";
      headerBoxSection.style.position = "sticky";
      wrapperHeader.classList.remove("section__box-color");
      ourFriends.classList.remove("section__box-color");
    }
  }
  if (target === contact) {
    window.scrollBy(0, 1800);
    headerNavigetionID.style.top = "1800px";
    setTimeout(() => {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove(
          "header__navigation-burger-slideout"
        );
        headerNavigetionID.style.top = "0px";
        headerBoxSection.style.position = "sticky";
      }, 900);
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      pageTitleText.style.color = "rgba(84, 84, 84, 1)";
      pageTitleUnderLogoText.style.color = "rgba(41, 41, 41, 1)";
      wrapperHeader.classList.remove("section__box-color");
      ourFriends.classList.remove("section__box-color");
    }, 900);
  }
  if (target === our) {
    headerNavigetionID.classList.remove("header__navigation-burger");
    headerNavigetionID.classList.add("header__navigation-burger-slideout");
    setTimeout(() => {
      headerNavigetionID.classList.remove("header__navigation-burger-slideout");
    }, 900);
    headerNavigetionID.classList.add("header__navigation");
    label.classList.add("menu__label-close");
    label.classList.remove("menu__label-open");
    pageTitleText.style.color = "rgba(84, 84, 84, 1)";
    pageTitleUnderLogoText.style.color = "rgba(41, 41, 41, 1)";
    headerBoxSection.style.position = "sticky";
    bodyMain.classList.remove("body");
    wrapperHeader.classList.remove("section__box-color");
    ourFriends.classList.remove("section__box-color");
  }
  if (target === label || labelSpan) {
    if (labelBurgerClose) {
      headerNavigetionID.classList.add("header__navigation-burger");
      headerNavigetionID.classList.remove("header__navigation");
      label.classList.add("menu__label-open");
      label.classList.remove("menu__label-close");
      pageTitleText.style.color = "rgba(241, 205, 179, 1)";
      pageTitleUnderLogoText.style.color = "rgba(255, 255, 255, 1)";
      headerBoxSection.style.position = "static";
      bodyMain.classList.add("body");
      wrapperHeader.classList.add("section__box-color");
      ourFriends.classList.add("section__box-color");
    } else if (labelBurgerOpen) {
      headerNavigetionID.classList.remove("header__navigation-burger");
      headerNavigetionID.classList.add("header__navigation-burger-slideout");
      setTimeout(() => {
        headerNavigetionID.classList.remove(
          "header__navigation-burger-slideout"
        );
      }, 900);
      headerNavigetionID.classList.add("header__navigation");
      label.classList.add("menu__label-close");
      label.classList.remove("menu__label-open");
      bodyMain.classList.remove("body");
      wrapperHeader.classList.remove("section__box-color");
      ourFriends.classList.remove("section__box-color");
    }
  }
}
