const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


/*const galleryItem = imagesInfo => {
  const galleryItemLi = document.createElement('li');
  const galleryImg = document.createElement('img');

  galleryImg.src = imagesInfo.url;
  galleryImg.alt = imagesInfo.alt;
  

  galleryItemLi.append(galleryImg);
  
  return galleryItemLi;
};

const galleryArr = images.map(image => galleryItem(image));

  const galleryList = document.querySelector('.gallery');

  galleryList.append(...galleryArr);*/


const creatCard = imagesData => {
  return `
  <li>
    <img src='${imagesData.url}' alt='${imagesData.alt}'>
  </li>`;
};

const galleryCardsArr = images.map(el => creatCard(el)).join('');

const galleryListItem = document.querySelector('.gallery');

// galleryListItem.innerHTML = galleryCardsArr;

galleryListItem.insertAdjacentHTML('afterbegin', galleryCardsArr);
