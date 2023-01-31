const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesContainerEl = document.querySelector(".gallery")

const makeItemsGallery = (array) => array.map(({ url, alt }) => {
  return `<li class = "js-gallery_item  gallery__pictures"> <img src = "${url}" alt = "${alt}"></li>`
}).join('');


const newGalery = makeItemsGallery(images);

imagesContainerEl.insertAdjacentHTML("beforeend", newGalery);       

console.log(imagesContainerEl)

imagesContainerEl.style.display = "flex";
imagesContainerEl.style.flexwrap = "wrap";
imagesContainerEl.style.gap = "40px";














// const imagesContainerEl = document.querySelector("gallery")

// const newImageListItemEl = (options) => {
//   return options.map(({url, alt}) => {
//     const newImageItemEl = document.createElement("li");
//     const newImageEl = document.createElement("img");
//     newImageEl.src = url;
//     newImageEl.alt = alt;
//     newImageItemEl.appendChild(newImageEl)
//     return newImageItemEl
//   });
// };

// const elements = newImageListItemEl(images);
// console.log(elements);
