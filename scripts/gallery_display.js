import { galleryData } from "/scripts/data.js"
console.log("Gallery data is working");
console.log("Displaying gallery: ", galleryData);
const gallery = document.getElementById("gallery-data");
gallery.innerHTML = "";
//store in local storage
localStorage.setItem("galleryData", JSON.stringify(galleryData));
// galleryData.forEach((product) => {
//   //test if data is being displayed
//   console.log("Gallery titles: ", product.image);
//   gallery.innerHTML += `
//     <div class='card'>
//     <h2>${product.title}</h2>
//   <img src="${product.image}" alt="${product.title}" oneerror="this.onerror=null;this.src='default.png';"/>
//   <p><strong>Inspiration:</strong> ${product.inspiration}</p>
//    <p><strong>Artist:</strong> ${product.artist}</p>
//     <p><strong>Category:</strong> ${product.category}</p>
//       <button id="loadBtn">Load More</button>

//     </div>`
// })
let counter = 3;
let storedData=[];
//fetch only 3 products
function loadData(gallery) {
  //fetch the first 3 items
  let startIndex = 0;
  let endingIndex = counter;
  for (let i = startIndex; i < endingIndex; i++) {
    storedData.push(gallery[i]);
  }
  console.log('Gallery Data: ', storedData);
  //fetch the next 3 items
  counter=counter+3;

}


loadData(galleryData);